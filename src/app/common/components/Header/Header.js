import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {


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
          </Nav>
        </div>
      </div>
    );
  }
}
