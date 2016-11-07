var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('muicss/lib/react/button');
var Container = require('muicss/lib/react/container');
var Row = require('muicss/lib/react/row');
var Col = require('muicss/lib/react/col');

var SecurityQuestions = React.createClass({

  getInitialState: function() {
    return{
      question1: "submit",
      question2: "submit",
      question3: "submit"
    };
  },

  lastTransactionAmount: function() {

    var response = ReactDOM.findDOMNode(this.refs.lastTransReponse).value
    var lastTransactionAmount = Math.abs(this.props.customerTransactionsData[0].transaction.amount);
    if (lastTransactionAmount == response) {
      this.setState({
        question1: "correct"
      })
    } else {
      this.setState({
        question1: "incorrect"
      })
    }
  },

  dateOfBirth: function() {
    var response = ReactDOM.findDOMNode(this.refs.dobResponse).value
    var customerDOB = this.props.customerInfoData[0].date_of_birth;
    if (customerDOB === response){
      this.setState({
        question2: "correct"
      })
    } else {
      this.setState({
        question2: "incorrect"
      })
    }
  },

  lastTopUpAmount: function() {
    var response = parseInt(ReactDOM.findDOMNode(this.refs.lastTopUpReponse).value)
    var lastTopUpTransaction = this.props.customerTransactionsData.find(findLastTopUp);
    var lastTopUp = lastTopUpTransaction.transaction.amount

    function findLastTopUp(field) {
        return field.transaction.description === 'Top up';
    }

    if (lastTopUp === response){
      this.setState({
        question3: "correct"
      })
    } else {
      this.setState({
        question3: "incorrect"
      })
    }
  },

  render: function() {
    return (
      <Container>
        <h4>Security Questions</h4>
        <Row>
          <Col md="12">
            <h4>What was the amount of the last transaction made with your card?</h4>
            <input type="text" ref="lastTransReponse" />
            <br/>
            <Button color="primary" onClick={this.lastTransactionAmount}>{this.state.question1}</Button>
            </Col>
        </Row>
        <Row>
          <Col md="12">
            <h4>What is your date of birth?</h4>
            <input type="date" ref="dobResponse" />
            <br/>
            <Button color="primary" onClick={this.dateOfBirth} >{this.state.question2}</Button>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <h4>What was the last top up amount you added to your card?</h4>
            <input type="text" ref="lastTopUpReponse" />
            <br/>
            <Button color="primary" onClick={this.lastTopUpAmount} >{this.state.question3}</Button>
          </Col>
        </Row>
      </Container>
    );
  }
});

module.exports = SecurityQuestions;
