import React from 'react';

import Productos from './Home/Productos/Productos';
import CarritoCompra from './Home/CarritoCompra/CarritoCompra';
import ComfirmacionCompra from './Home/ConfirmacionCompra/ConfirmacionCompra';
import ProductoDetalle from './Home/ProductoDetalle/ProductoDetalle';
import Header from './Common/components/Header/Header';
import Body from './Common/components/Body/Body';
import Footer from './Common/components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-app'>
        <Router>
          <div>
            <Header />
            <Body>
              <Switch>
                <Route exact path='/'>
                  <Productos />
                </Route>
                <Route path='/carrito-compra'>
                  <CarritoCompra />
                </Route>
                <Route path='/confirmacion-compra'>
                  <ComfirmacionCompra />
                </Route>
                <Route path={`/producto-detalle/:productoId`}>
                  <ProductoDetalle />
                </Route>
              </Switch>
            </Body>
            <Footer></Footer>
          </div>
        </Router>
      </div>
    );
  }
}
