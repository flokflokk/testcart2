import React from "react";
import { connect } from "react-redux";
import { lifecycle, compose } from "recompose";

import { findAll } from "../../actions/products";
import Loading from "../../components/Loading";
import BaseHero from "../../components/BaseHero/index.js";

const HomePage = ({ isFetching, products }) => {
  if (isFetching) {
    return <Loading />;
  }
  return (
    <div className="home">
    <BaseHero/>
      <section className="hero">
        <div className="hero-body">
          <div className="container" />
        </div>
      </section>
      <section className="section home-products">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <h2 className="title">Create SO</h2>
              <div classname="column">
                <div className="boxQa container column is-two-thirds   ">
                  <input
                    className="input is-success "
                    type="text"
                    placeholder="Quatation ID"
                    value=""
                  />
                </div>
                <div className="column">
                  <button className="button is-link is-right">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const withLifecycle = lifecycle({
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(findAll());
  }
});

const mapStateToProps = state => ({
  isFetching: state.products.list.isFetching,
  products: state.products.list.data
});

export default compose(
  connect(mapStateToProps),
  withLifecycle
)(HomePage);

// <div className="home">
//       <section className="section home-products">
//         <div className="container">
//           <div className="columns">
//             <div className="column is-12">
//               <h2 className="title">Our Products</h2>
//             </div>
//           </div>

//           <div className="columns is-multiline">
//             {products &&
//               products.map(product => {
//                 const linkToDetail = `/${product.id}`;

//                 return (
//                   <div className="column is-4">
//                     <ProductItem product={product} to={linkToDetail} />
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </section>
//      </div>
