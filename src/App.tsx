import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Product } from './components/Product';
import { Products } from './components/Products';
import * as Routes from './constants/routes';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
        <Route path={Routes.PRODUCT}>
          <Product />
        </Route>
        <Route path={Routes.PRODUCTS}>
          <Products />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
