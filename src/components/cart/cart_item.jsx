/**
* This component  displays a cart item
* 
**/
import React from "react";
import PropTypes from "prop-types";
export default class CartItem extends React.Component {
  constructor(props) {
    super();
    this.removItem = props.removeItem;
    this.state = { ...props.cartItem };
    this.productId = props.i;
  }

  render() {
    return (
      <li className="pure-menu-item product">
        <span>
          <button className='remove' id={this.productId} onClick={this.removItem}>
            remove
          </button>
        </span>
        <span>{this.state.productName}</span>
        <span className='cart-item-price'>£ {this.state.price}</span>

      </li>
    );
  }
}
