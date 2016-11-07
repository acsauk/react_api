var React = require('react');
var CustomerInfoItem = require('./CustomerInfoItem');
var Container = require('muicss/lib/react/container');

var CustomerInfo = React.createClass({
  render: function() {
    var customerDataItems = this.props.customerInfoData.map(function(data) {
      return <CustomerInfoItem
              key={data.user_number}
              customerName={data.name}
              customerEmail={data.email}
              customerPhoneNumber={data.phone_number}
              customerUserNumber={data.user_number}
              customerDateOfBirth={data.date_of_birth}
              customerAddress={data.address.street_address[0] + ", " +
                               data.address.locality + ", " +
                               data.address.postal_code}
              />
    });

    return (
      <Container>
        <h2>Customer Info</h2>
        <ul className="mui-list--unstyled">
          {customerDataItems}
        </ul>
      </Container>
    );

  }
});

module.exports = CustomerInfo;
