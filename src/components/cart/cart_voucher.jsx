import React from "react";
import PropTypes from "prop-types";
export default class Voucher extends React.Component {
  constructor(props) {
    super();
    this.state = {
      alert: props.alert
    };
    this.voucher = React.createRef();
    this.applyVoucherDiscount = props.applyVoucherDiscount;
  }
  componentWillReceiveProps(nextProps) {
    // this.state = { total: nextProps.total, subTotal: nextProps.subTotal };
  }
  render() {
    // Render the cart
    if (this.state.alert === 1) {
      var alert = (
        <span id="alert">Voucher codes have to be a 4 digit number</span>
      );
    } else {
      var alert = "";
    }
    return (
      <li className="pure-menu-item product">

        <span className="voucher">
        <p>(£10 discounted for every voucher) </p>
          Apply voucher :
          <input
            ref={this.voucher}
            id="voucherCode"
            placeholder="4-digit number"
          />
          <button onClick={this.validateVoucher}>Add voucher</button>
        </span>
        {alert}
      </li>
    );
  }

  validateVoucher = () => {
    //To Do: Refactor and move to parent component
    // let newItem = this.newItem.current["value"];

    let voucher = this.voucher.current["value"];
    let patt = /^\d{4}$/;
    let result = voucher.match(patt);

    if (result != null) {
      this.applyVoucherDiscount();

      this.setState({ alert: 0 });
    } else {
      this.setState({ alert: 1 });
    }
  };
}
