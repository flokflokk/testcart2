import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'


export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    {/* <Route exact path="/stock" component={StockPage} /> */}
  </Switch>
)