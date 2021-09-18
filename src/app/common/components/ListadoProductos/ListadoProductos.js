import React from 'react';
import ItemProducto from '../ItemProducto/ItemProducto';
// import ProductosConstant from '../../constants/ProductosConstant';
import './ListadoProductos.css';

// import { collection, query, where, getDocs } from "firebase/firestore/lite";

export default class ListadoProductos extends React.Component {
  // productos = [];
  constructor({ props }) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper-listado-productos row justify-content-center'>
        {this.props.productos.map((item, index) => (
          <div className='col-md-3 mb-3' key={index} >
            <ItemProducto id={item.id} producto={item.data} changeProducts={this.props.changeProducts} />
          </div>
        ))}
      </div>
    );
  }
}
