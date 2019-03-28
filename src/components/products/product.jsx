/**
* This component  displays the product
* 
**/
import React from "react";
import PropTypes from "prop-types";
import addToCartButton from "./add_button";
import AddToCartButton from "./add_button";

export default class Product extends React.Component {
  constructor(props) {
    super();
    this.state = { products: props.products };
    this.currentProductIndex = props.i;
    this.addItem = props.addItem;
    this.categoryId = props.categoryId;
  }
  componentWillReceiveProps(nextProps) {}

  render() {
    let productList = "";
    let id = this.categoryId + "-" + this.currentProductIndex;
    if (this.state.products[this.currentProductIndex].quantityInStock === "0") {
      var addButton = (
        <button className="disabled" disabled>
          Sorry This item is not in stock{" "}
        </button>
      );
    } else {
      var addButton = (
        <button
          id={this.categoryId + "-" + this.currentProductIndex}
          onClick={this.addItem}
        >
          add to cart
        </button>
      );
    }
    return (
      <div className="pricing-table pure-u-1 pure-u-md-1-4">
        <div className="pricing-table-header">
          <h2>{this.state.products[this.currentProductIndex].productName}</h2>

          <span className="pricing-table-price">
            <span>
              £ {this.state.products[this.currentProductIndex].price}{" "}
            </span>
          </span>
        </div>
        <span className='qty'>{this.state.products[this.currentProductIndex].quantityInStock} in stock</span>
        {/* {addButton} */}
        <AddToCartButton
          addItem={this.addItem}
          id={id}
          productQty={
            this.state.products[this.currentProductIndex].quantityInStock
          }
        />
      </div>
    );
  }
}
