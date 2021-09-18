import React from 'react';
import { Link } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore/lite';
import './ItemProducto.css';

import { query, collection, addDoc, setDoc } from 'firebase/firestore/lite';
import { db } from '../../../Core/firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

import swal from 'sweetalert';

export default class ItemProducto extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  async handleDeleteItem() {
    swal({
      title: '¿Esta seguro de eliminar el registro?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });

        await deleteDoc(doc(db, 'productos', this.props.id));
        this.props.changeProducts();
      }
    });
  }

  async handleAddProduct() {
    const userId = localStorage.getItem('userId');
    await setDoc(doc(db, `carrito-compra/${userId}/productos/${uuidv4()}`), {
      id: this.props.id,
      producto: this.props.producto,
      cantidad: 1,
    });
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
            to={`/producto-detalle/${this.props.id}`}
            className='btn btn-primary my-2'
          >
            Ver detalle
          </Link>
          <button
            type='button'
            className='btn btn-danger mb-2'
            onClick={() => this.handleDeleteItem()}
          >
            Eliminar Registro
          </button>
          <button
            type='button'
            className='btn btn-danger mb-2'
            onClick={() => this.handleAddProduct()}
          >
            Agregar Carrito
          </button>
        </div>
      </div>
    );
  }
}
