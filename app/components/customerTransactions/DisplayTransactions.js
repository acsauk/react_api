var React = require('react');
var Container = require('muicss/lib/react/container');

var DisplayTransactions = React.createClass({

  render: function() {
    return(
      <Container>
        <h2>Customer Transactions</h2>
        {this.props.displayTransactions}
      </Container>
    );
  }
});

module.exports = DisplayTransactions;
