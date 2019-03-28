import React from "react";
import PropTypes from "prop-types";

export default class AddToCartButton extends React.Component {
  constructor(props) {
    super();
    this.state = { productQty: props.productQty, id: props.id };
    this.addItem = props.addItem;
  }
  componentWillReceiveProps(nextProps) {}

  render() {
    let productList = "";
    if (this.state.productQty === "0") {
      var addButton = (
        <button className="disabled" disabled>
          Sorry This item is not in stock
        </button>
      );
    } else {
      var addButton = (
        <button  id={this.state.id} onClick={this.addItem}>
          add to cart
        </button>
      );
    }
    return <span className='add'>{addButton}</span>;
  }
}
