import React from 'react';

import { query, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../Core/firebaseConfig';

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
    console.log(querySnapshot);
    
    querySnapshot.forEach((doc) => {
      console.log('getCarritoCompra', doc.data());
      carritoCompra.push({ id: doc.id, data: doc.data() });
    });
    this.setState({ carritoCompra });
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
            </tr>
          </thead>
          <tbody>
            {this.state.carritoCompra.map((item) => (
              <tr key={item.id}>
                <td>
                    {item.data.producto?.image && <img src={item.data.producto?.image} width="70px" alt="" />}
                </td>
                <td>{item.data.producto?.title}</td>
                <td>{item.data.producto?.precie}</td>
                <td>{item.data.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
