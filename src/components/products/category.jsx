/**
* This component  displays the product list and category
* 
* 
**/
import React from "react";
import PropTypes from "prop-types";
import Product from "./product";
export default class Category extends React.Component {
  constructor(props) {
    super();
    this.state = {
      categoryProducts: props.categoryProducts.products,
      categoryName: props.categoryProducts.categoryName
    };
    this.addItem = props.addItem;
    this.categoryId = props.i;
  }
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1 category">
          {" "}
          {this.state.categoryName}
        </div>
        <div className="pure-u-1 pure-u-md-1">
          <div className="pure-g products">
            {this.state.categoryProducts.map((products, i) => {
              return (
                <Product
                  key={i}
                  i={i}
                  categoryId={this.categoryId}
                  products={this.state.categoryProducts}
                  addItem={this.addItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
