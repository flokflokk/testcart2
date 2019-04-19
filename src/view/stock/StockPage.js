import React from "react";
import "../../css/StockPage.css";
import "../../css/ProductItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { lifecycle, compose } from "recompose";
import { findAll, deleteProduct } from "../../actions/products";

const StockPage = ({ products, dispatch }) => {
  return (
    <div className="home c">
      <section className="hero">
        <div className="hero-body">
          <div className="container" />
        </div>
      </section>
      <section className="section headerstock">
        <div className="container">
          <h2 className="title">Stock</h2>
          <div className="columns">
            <div className="column is-12">
              <Link to="/stock/new" className="button is-info">
                Create
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section stock-products">
        <table className="table marginTable is-striped is-narrow is-hoverable is-fullwidth ">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Picture</th>
              <th>Brand</th>
              <th>Product Feature</th>
              <th>Product Benefit</th>
              <th>Price</th>
              <th>Quatinty</th>
              <th>Warranty Period</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(product => {
                const linkToEdit = `/stock/${product.id}/edit`;

                return (
                  <tr>
                    <td>{product.name}</td>
                    <td>
                      <img
                        className="imgP"
                        src={product.coverImage}
                        alt={product.name}
                      />
                    </td>
                    <td>{product.brand}</td>
                    <td>{product.feature}</td>
                    <td>{product.benefit}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.warranty_p}</td>
                    <td>
                      <Link to={linkToEdit}>
                        <button className="button is-link is-right">
                          <img
                            className="imgicon"
                            src="https://image.flaticon.com/icons/svg/61/61456.svg"
                          />{" "}
                        </button>
                      </Link>
                      <button
                        className="button is-danger"
                        onClick={() => {
                          onHandleDelete(product.id, dispatch);
                        }}
                      >
                        <img
                          className="imgicon"
                          src="https://image.flaticon.com/icons/svg/64/64022.svg"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

const onHandcheck = linkToEdit => {
  console.log("id ", linkToEdit);
};

const onHandleDelete = (id, dispatch) => {
  const isConfirm = window.confirm("Are you sure to delete?");
  if (isConfirm) {
    //console.log('delete ', id)
    dispatch(deleteProduct(id));
  }
};

const mapStateToProps = state => ({
  isFetching: state.products.list.isFetching,
  products: state.products.list.data
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;

      dispatch(findAll());
    }
  })
)(StockPage);
