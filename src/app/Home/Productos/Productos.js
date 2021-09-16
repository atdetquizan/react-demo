import React from 'react';
import FormProducto from '../../Common/components/FormProducto/FormProducto';
import ListadoProductos from '../../Common/components/ListadoProductos/ListadoProductos';

export default class Productos extends React.Component {
  render() {
    return (
      <div>
        <h4>Registro de productos</h4>
        <div className='dropdown-divider mb-4'></div>
        <div className="row">
          <div className="col-md-6">
            <FormProducto />
          </div>
        </div>
        <h4>Listado de productos</h4>
        <div className='dropdown-divider mb-4'></div>
        <ListadoProductos />
      </div>
    );
  }
}
