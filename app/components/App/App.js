var React = require('react');
var Buttons = require('./Buttons');
var SearchDates = require('./SearchDates');
var CustomerInfo = require('../customerInfo/CustomerInfo');
var CustomerTransactions = require('../customerTransactions/CustomerTransactions');
var FilteredTransactions = require('../customerTransactions/FilteredTransactions');
var DisplayTransactions = require('../customerTransactions/DisplayTransactions');
var SecurityQuestions = require('./SecurityQuestions');

var Container = require('muicss/lib/react/container');
var Row = require('muicss/lib/react/row');
var Col = require('muicss/lib/react/col');

var App = React.createClass({

  getInitialState: function() {
      return {
          customerInfoData: [],
          customerTransactionsData: [],
          filteredTransactionData: [],
          displayTransactions: []
      }
  },

  componentDidMount: function(){
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: "https://crossorigin.me/https://acsauk-api.000webhostapp.com/list.json",
      success: function(response){
        this.saveAPIToState(response);
      }.bind(this)
    });
  },

  getAPIData: function(URL){
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: URL,
      success: function(response){
        this.saveAPIToState(response);
      }.bind(this)
    });
  },

  saveAPIToState: function(response){
    if ("items" in response){
      this.setState({
        customerTransactionsData: response.items
      }, this.refs.customerTransactions.formatAndSend)
    } else {
      this.setState({
        customerInfoData: [response]
      })
    }
  },

  addFilteredResults: function(filteredResults){
    this.setState({
      filteredTransactionData: filteredResults
    }, this.refs.filteredTransactions.formatAndSend)
  },

  addTransactionsToDisplay: function(transactions){
    this.setState({
      displayTransactions: transactions
    })
  },

  render: function() {
    return (
      <Container className="main-content">
        <Row>
          <Col md="5" className="customer-info">
              <CustomerInfo customerInfoData={ this.state.customerInfoData } />
              <Buttons getAPIData={ this.getAPIData } />
              <SearchDates addFilteredResults={ this.addFilteredResults }
                           customerTransactionsData={ this.state.customerTransactionsData } />
              <SecurityQuestions customerTransactionsData={ this.state.customerTransactionsData }
                                 customerInfoData={ this.state.customerInfoData }
                                 ref="securityQuestions" />
          </Col>
          <Col md="7" className="customer-transactions">
            <DisplayTransactions displayTransactions={ this.state.displayTransactions } />
            <CustomerTransactions customerTransactionsData={ this.state.customerTransactionsData }
                                  addTransactionsToDisplay={ this.addTransactionsToDisplay }
                                  ref="customerTransactions" />
            <FilteredTransactions customerTransactionsData={ this.state.customerTransactionsData }
                                  filteredTransactionData={ this.state.filteredTransactionData }
                                  addTransactionsToDisplay={ this.addTransactionsToDisplay }
                                  ref="filteredTransactions" />
          </Col>
        </Row>
      </Container>
    );
  }
});

module.exports = App;
