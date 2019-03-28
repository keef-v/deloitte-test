/**
* Top level product component to display the categories and products
*  Note: the Category component has code to render the products
**/
import React from "react";
import PropTypes from "prop-types";
import Category from "./category";

export default class DisplayProductList extends React.Component {
  //Display product list
  constructor(props) {
    super();
    this.state = { products: props.products, cart: props.cart };
    this.voucher = React.createRef();
    this.addItem = props.addItem;
  }
  render() {
    return (
      <div className="l-content">
        <div className="pricing-tables ">
          {this.state.products.map((products, i) => {
            return (
              <Category
                key={i}
                i={i}
                categoryProducts={products}
                addItem={this.addItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
