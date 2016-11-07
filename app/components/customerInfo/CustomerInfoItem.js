var React = require('react');

var CustomerInfoItem = React.createClass({
  render: function() {
    return (
      <div>
         <li>Email: {this.props.customerEmail}</li>
         <li>Phone Number: {this.props.customerPhoneNumber}</li>
         <li>User Number: {this.props.customerUserNumber}</li>
         <li>Date of Birth: {this.props.customerDateOfBirth}</li>
         <li>Address: {this.props.customerAddress}</li>
      </div>
    );
  }
});

module.exports = CustomerInfoItem;
