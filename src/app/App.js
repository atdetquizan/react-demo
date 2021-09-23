import React from 'react';

import Productos from './Home/Productos/Productos';
import CarritoCompra from './Home/CarritoCompra/CarritoCompra';
import ComfirmacionCompra from './Home/ConfirmacionCompra/ConfirmacionCompra';
import ProductoDetalle from './Home/ProductoDetalle/ProductoDetalle';
import Header from './Common/components/Header/Header';
import Body from './Common/components/Body/Body';
import Footer from './Common/components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import eventBus from './Core/eventBus';

import './Core/firebaseConfig';
import './App.css';
import Auth from './Auth/Auth';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

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
                  {this.state.token ? <ComfirmacionCompra /> : <Auth />}
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

  onAuthSutmit(values) {
    this.setState({ token: true });
    const userId = localStorage.getItem('userId');
    if (!userId) {
      localStorage.setItem('userId', uuidv4());
    }
  }

  componentDidMount() {
    eventBus.on('log-in', (data) => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        localStorage.setItem('userId', data.uid);
      }
      this.setState({ token: localStorage.getItem('userId') });
    });

    eventBus.on('log-out', (data) => {
      localStorage.removeItem('userId');
      this.setState({ token: null });
    });


    if (localStorage.getItem('userId')) {
      this.setState({ token: localStorage.getItem('userId') });
    }

  }

  componentWillUnmount() {
    eventBus.remove('log-in');
    eventBus.remove('log-out');
  }
}
