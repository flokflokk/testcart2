import React from 'react'
import { Route, Switch } from 'react-router-dom'

import StockPage from './StockPage';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';


export default () => (
  <Switch>
    <Route exact path="/stock" component={StockPage} />
    <Route exact path="/stock/new" component={CreateProduct} />
    {/* <Route exact path="/stock/:id" component={ProductDetail} />*/}
    <Route exact path="/stock/:id/edit" component={EditProduct} /> 
    
  </Switch>
)