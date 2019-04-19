import React, { Fragment } from "react";
import Form from "../components/Form";
import BaseHero from "../../../components/BaseHero";
import { createProduct } from '../../../actions/products'

const handleCreateProduct = (values, dispatch) => {
  //console.log("values ", values);
  const payload = { ...values, coverImage: values.coverImage.imageUrl }
  //console.log("payload ", payload);
  dispatch(createProduct(payload))
};

const CreateProduct = () => {
  return (
    <Fragment>
      <BaseHero />
      <Form onSubmit={handleCreateProduct} />
    </Fragment>
  );
};

export default CreateProduct;
