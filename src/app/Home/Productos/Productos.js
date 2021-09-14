import React from 'react';

import ListadoProductos from '../../Common/components/ListadoProductos/ListadoProductos';

export default class Productos extends React.Component {
  render() {
    return (
      <div>
        <h4>Listado de productos</h4>
        <div className='dropdown-divider mb-4'></div>
        <ListadoProductos />
      </div>
    );
  }
}
