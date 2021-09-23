import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
  query,
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore/lite';
import { db } from '../../Core/firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

export default class ConfirmacionCompra extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, carritoCompra: [], disabled: false };
    this.handleClose = () => this.setState({ show: false });
    this.handleShow = () => this.setState({ show: true });
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

    if (carritoCompra.length === 0) {
      this.setState({ disabled: true });
    }
    this.setState({ carritoCompra });
  }

  async handleConfirm() {
    const userId = localStorage.getItem('userId');
    const carritoCompra = [];

    const q = query(collection(db, `carrito-compra/${userId}/productos`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      carritoCompra.push({ id: doc.id, data: doc.data() });
    });

    await setDoc(doc(db, `confirmar-compra/${userId}/compras/${uuidv4()}`), {
      carritoCompra,
    });

    querySnapshot.forEach(async (item) => {
      await deleteDoc(doc(db, `carrito-compra/${userId}/productos`, item.id));
    });

    this.handleClose();
  }

  render() {
    return (
      <div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={this.handleShow}
        >
          Registrar Compra
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registro de compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you're reading this text in a modal!
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
                      {item.data.producto?.image && (
                        <img
                          src={item.data.producto?.image}
                          width='70px'
                          alt=''
                        />
                      )}
                    </td>
                    <td>{item.data.producto?.title}</td>
                    <td>{item.data.producto?.precie}</td>
                    <td>{item.data.cantidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant='primary'
              disabled={this.state.disabled}
              onClick={() => this.handleConfirm()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
