import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./components/ProductItem";
import { connect } from "react-redux";
import { lifecycle, compose } from "recompose";
import { findAll } from "../../../actions/products";
import { addToCart } from "../../../actions/cart/index";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Product Management</h1>
            <h2 className="subtitle">: )</h2>
          </div>
        </div>
      </section>
      <section className="section product-data">
        <div className="container">
          <h2 className="title">Product List</h2>
          <div className="columns">
            <div className="column is-12">
              <Link to="/new" className="button is-info">
                Create
              </Link>
              <Link to="/test" className="button is-info">
                Test Form
              </Link>
            </div>
          </div>

          {products &&
            products.map(product => {
              return <ProductItem product={product} />;
            })}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.products.list.isFetching,
    products: state.products.list.data
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     pr:() => dispatch(findAll()),
//     addToCart: id => {
//       dispatch(addToCart(id));
//     }
//   };
// };

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(findAll());
    }
  })
)(ProductList);
