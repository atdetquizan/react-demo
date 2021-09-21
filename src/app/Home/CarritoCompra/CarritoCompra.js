import React from 'react';

import { query, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../Core/firebaseConfig';
import swal from 'sweetalert';
import { doc, deleteDoc } from 'firebase/firestore/lite';

export default class CarritoCompra extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carritoCompra: [] };
    this.getCarritoCompra();
  }

  async getCarritoCompra() {
    const userId = localStorage.getItem('userId');
    const carritoCompra = [];

    const q = query(collection(db, `carrito-compra/${userId}/productos`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      carritoCompra.push({ id: doc.id, data: doc.data() });
    });
    this.setState({ carritoCompra });
  }

  handleDelete(id) {

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
        
        const userId = localStorage.getItem('userId');
        await deleteDoc(doc(db, `carrito-compra/${userId}/productos`, id));
        
        this.getCarritoCompra();
      }
    });
  }

  render() {
    return (
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {this.state.carritoCompra.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.data.producto?.image && (
                    <img src={item.data.producto?.image} width='70px' alt='' />
                  )}
                </td>
                <td>{item.data.producto?.title}</td>
                <td>{item.data.producto?.precie}</td>
                <td>{item.data.cantidad}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger mb-2'
                    onClick={() => this.handleDelete(item.id)}
                  >
                    Eliminar Registro
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
