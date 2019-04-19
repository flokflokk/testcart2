import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../../css/ProductItem.css";
import { addToCart } from "../../../../actions/cart/index";

const ProductItem = ({ product, to }) => {
  const linkToEdit = `/products/${product.id}/edit`;

  // const handleClick = () => {

  //   console.log("id >> ",product.id)
  //   console.log("id name >> ",product.name)
  //   console.log("product >> ",product)
  // }


  const handleClick = id => {
    console.log(id);
    this.props.addToCart(id);
    
    
  };

  return (
    <div className="columns">
      <div className="card">
        <div className="columns ">
          <img className="imgP" src={product.coverImage} alt={product.name} />
          <div className="content column is-one-quarter">
            <strong>Product Feature</strong>
            <p>{product.feature}</p>
          </div>
          <div className="content column is-one-quarter">
            <strong>Product Benefit</strong>
            <p>{product.benefit}</p>
            <a
              className="button is-info"
              onClick={() => {
                handleClick(product.id);
              }}
            >
              Select
            </a>
          </div>
          <div className="content column quantity ">
            <p>{product.price} B </p>
            <strong>Quatinty</strong>
            <input type="number" name="quantity" min="1" max="99" />
            <p>{product.quantity} piece </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapDispatchToProps)(ProductItem);
