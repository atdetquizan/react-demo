import React from 'react';
import ItemProducto from '../ItemProducto/ItemProducto';
import ProductosConstant  from '../../constants/ProductosConstant';
import './ListadoProductos.css';

export default class ListadoProductos extends React.Component {
  
  render() {
    return (
      <div className="wrapper-listado-productos">
        {ProductosConstant.map((item) => (<ItemProducto key={item.id} producto={item} />))}
      </div>
    );
  }
}
