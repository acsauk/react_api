var React = require('react');
var ReactDOM = require('react-dom');
var Col = require('muicss/lib/react/col');
var Row = require('muicss/lib/react/row');
var Button = require('muicss/lib/react/button');
var Container = require('muicss/lib/react/container');

var SearchDates = React.createClass({

  render: function(){
    return(
      <Container>
      <h4>Filter Transaction Dates</h4>
      <Row>
        <Col md="6">
          <input ref="startDate" type="date" />
        </Col>
        <Col md="6">
          <input ref="endDate" type="date" />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Button color="primary" onClick={this.searchDatesResults}>Filter Transactions</Button>
        </Col>
      </Row>
      </Container>
    );
  },

  searchDatesResults: function(){
    var startDate = new Date(ReactDOM.findDOMNode(this.refs.startDate).value);
    var endDate = new Date(ReactDOM.findDOMNode(this.refs.endDate).value);

    var filteredData = this.props.customerTransactionsData.filter(function(a) {
        return new Date(a.created) > startDate && new Date(a.created) < endDate;
    });
      this.props.addFilteredResults(filteredData)
  }
});

module.exports = SearchDates;
