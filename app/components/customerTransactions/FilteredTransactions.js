var React = require('react');
var CustomerTransactionItem = require('./CustomerTransactionItem');

var FilteredTransactions = React.createClass({

  formatAndSend: function() {
    var filteredTransactionsItems = this.props.filteredTransactionData.map(function(data) {
      if (data.transaction === null){
        return <CustomerTransactionItem
                key={data.external_id}
                transactionDescription="System transaction"
                transactionAmount=""
                transactionCategory="N/A"
                transactionCurrency="N/A"
                transactionDateTime="N/A"
                accountId="N/A"
                accountBalance="N/A"
                merchantName="N/A"
                merchantAddress="N/A"
                merchantEmoji="ℹ️"
                />
      } else if (data.transaction != null && data.transaction.merchant === null) {
        return <CustomerTransactionItem
                key={data.external_id}
                transactionDescription={data.transaction.description}
                transactionAmount={data.transaction.amount}
                transactionCategory={data.transaction.category}
                transactionCurrency={data.transaction.currency}
                transactionDateTime={data.transaction.created}
                accountId={data.transaction.account_id}
                accountBalance={data.transaction.account_balance}
                merchantName="Mondo"
                merchantAddress="N/A"
                merchantEmoji="🔝"
                />
      } else {
        return <CustomerTransactionItem
                key={data.external_id}
                transactionDescription={data.transaction.description}
                transactionAmount={data.transaction.amount}
                transactionCategory={data.transaction.category}
                transactionCurrency={data.transaction.currency}
                transactionDateTime={data.transaction.created}
                accountId={data.transaction.account_id}
                accountBalance={data.transaction.account_balance}
                merchantName={data.transaction.merchant.name}
                merchantAddress={data.transaction.merchant.address.formatted}
                merchantEmoji={data.transaction.merchant.emoji}
                />
      }
    });
    this.props.addTransactionsToDisplay(filteredTransactionsItems)
  },

  render: function(){
    return(
      null
    );
  }
});

module.exports = FilteredTransactions;
