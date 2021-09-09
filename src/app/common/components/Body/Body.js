import React from 'react';
import Edad from '../Edad/Edad';
import ListadoProductos from '../ListadoProductos/ListadoProductos';

import './Body.css';

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      nombres: 'Anthony',
      años: 0,
    };
  }
  render() {
    return (
      <nav className='wrapper-body'>
        <input type='text' onChange={(e) => this.setState({años: +e.target.value})} />
        <Edad años={this.state.años}></Edad>
        <ListadoProductos />
      </nav>
    );
  }
}
