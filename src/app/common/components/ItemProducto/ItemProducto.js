import React from 'react';
import { Link } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import './ItemProducto.css';
import { db } from '../../../Core/firebaseConfig';

export default class ItemProducto extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  async handleDeleteItem() {
    await deleteDoc(doc(db, 'productos', this.props.id));
  }
  render() {
    return (
      <div className='content-proudcto'>
        <div className='content-proudcto__title'>
          {this.props.producto.title}
        </div>
        <div className='content-proudcto__image'>
          <img
            src={this.props.producto.image}
            alt={this.props.producto.title}
          />
        </div>
        <div className='content-proudcto__footer d-flex flex-column'>
          {/* <button type='button' className='btn btn-primary'>Ver Detalle</button> */}

          <Link
            to={`/producto-detalle/${this.props.producto.id}`}
            className='btn btn-primary my-2'
          >
            Carrito Compra
          </Link>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => this.handleDeleteItem()}
          >
            Eliminar Registro
          </button>
          <button type='button' className='btn btn-danger'>
            Agregar Carrito
          </button>
        </div>
      </div>
    );
  }
}
