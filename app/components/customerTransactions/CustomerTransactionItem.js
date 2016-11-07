var React = require('react');

var CustomerTransactionItem = React.createClass({

  render: function() {
    return (
      <container>
        <details>
          <summary className="transaction">
            {this.props.merchantEmoji + " "}
            {" " + this.props.transactionDescription + " "}
            <br />
            {this.props.transactionDateTime.substring(0,10) + " "}
            {this.props.transactionDateTime.substring(11,16) + " "}
            {this.props.transactionCurrency + " " + Math.abs(this.props.transactionAmount)}
          </summary>
            <p>Description: {this.props.transactionDescription}</p>
            <p>Amount: {this.props.transactionCurrency + " " + this.props.transactionAmount}</p>
            <p>Category: {this.props.transactionCategory}</p>
            <p>Date: {this.props.transactionDateTime.substring(0,10)}</p>
            <p>Time: {this.props.transactionDateTime.substring(11,16)}</p>
            <p>Account Balance: {this.props.transactionCurrency + " " + this.props.accountBalance}</p>
            <p>Merchant Name: {this.props.merchantName}</p>
            <p>Merchant Address: {this.props.merchantAddress}</p>
            <br />
        </details>
      </container>

    );
  }
});

module.exports = CustomerTransactionItem;
