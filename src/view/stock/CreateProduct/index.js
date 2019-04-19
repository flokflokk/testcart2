import React, { Fragment } from "react";
import Form from "../components/Form";
import { createProduct } from '../../../actions/products'
import '../../../css/FormCreateProduct.css'

const handleCreateProduct = (values, dispatch) => {
  //console.log("values ", values);
  const payload = { ...values, coverImage: values.coverImage.imageUrl }
  //console.log("payload ", payload);
  dispatch(createProduct(payload))
};

const CreateProduct = () => {
  return (
    <Fragment>
      <div className="columns ">
        
        <section className="section formcreatestock head">
        <div className="column ">
        <h1 className="title">Add New Product</h1>
        </div>
        <Form onSubmit={handleCreateProduct} />
        </section>

      </div>
      
    </Fragment>
  );
};

export default CreateProduct;
