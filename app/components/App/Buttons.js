var React = require('react');
var Container = require('muicss/lib/react/container');
var Row = require('muicss/lib/react/row');
var Col = require('muicss/lib/react/col');
var Dropdown = require('muicss/lib/react/dropdown');
var DropdownItem = require('muicss/lib/react/dropdown-item');

var Buttons = React.createClass({
  render: function(){
    return (
      <Container>
        <Row>
          <Col md="12">
            <h4>Options</h4>
            <Dropdown color="primary" label="Account Details">
              <DropdownItem onClick={this.loadCustomerDetails}>Customer Details</DropdownItem>
              <DropdownItem onClick={this.loadTransactionDetails}>Customer Transactions</DropdownItem>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    );

  },

  loadCustomerDetails: function(){
    this.props.getAPIData("https://api.s101.nonprod-ffs.io/ops-engineer/profile")
  },

  loadTransactionDetails: function(){
    this.props.getAPIData("https://api.s101.nonprod-ffs.io/ops-engineer/list")
  }

});

module.exports = Buttons;
