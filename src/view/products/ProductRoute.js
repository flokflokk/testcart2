import React from "react";
import { Route, Switch } from "react-router-dom";

import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";


//ส่ง path ไปให้ AuthRoute ตรวจสอบ

export default () => (
  <Switch>
    <Route exact path="/product" component={ProductList} />
    <Route exact path="/product/new" component={CreateProduct} />
    <Route exact path="/product/:id" component={ProductDetail} />
    <Route exact path="/product/:id/edit" component={EditProduct} />
    <Route exact path="/product/test" component={EditProduct} />
  </Switch>
);
