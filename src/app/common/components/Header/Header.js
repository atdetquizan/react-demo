import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import eventBus from '../../../Core/eventBus';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logIn: false };
  }

  onClickLogout() {
    eventBus.dispatch('log-out', {});
  }

  componentDidMount() {
    if (localStorage.getItem('userId')) {
      this.setState({ logIn: true });
    }
    eventBus.on('log-in', () => this.setState({ logIn: true }));
    eventBus.on('log-out', () => this.setState({ logIn: false }));
  }

  render() {
    return (
      <div className='container-fluit wrapper-header'>
        <div className='container'>
          <Nav
            activeKey='/home'
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Link to='/' className='nav-link'>
                Productos
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/carrito-compra' className='nav-link'>
                Carrito Compra
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/confirmacion-compra' className='nav-link'>
                Confirmacion de compra
              </Link>
            </Nav.Item>
            {this.state.logIn && (
              <Nav.Item>
                <button type='button' onClick={() => this.onClickLogout()}>
                  LOG-OUT
                </button>
              </Nav.Item>
            )}
          </Nav>
        </div>
      </div>
    );
  }
}
