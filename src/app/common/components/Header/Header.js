import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <nav className='wrapper-header'>
        <Nav
          activeKey='/home'
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Link to='/' class="nav-link">Productos</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/carrito-compra' class="nav-link">Carrito Compra</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/confirmacion-compra' class="nav-link">Confirmacion de compra</Link>
          </Nav.Item>
        </Nav>
      </nav>
    );
  }
}

