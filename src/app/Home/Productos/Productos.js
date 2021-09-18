import React from 'react';
import FormProducto from '../../Common/components/FormProducto/FormProducto';
import ListadoProductos from '../../Common/components/ListadoProductos/ListadoProductos';

import { query, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../Core/firebaseConfig';

export default class Productos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { productos: [] };
    this.handleChangeProduct = this.getProducts.bind(this);
    this.getProducts();
  }
  async getProducts() {
    // // , where("capital", "==", true)
    // // const q = query(collection(db, 'productos'));
    // const q = collection(db, 'productos');
    // // const data = [];
    // const querySnapshot = await getDocs(q);
    // console.log(querySnapshot.);
    // // querySnapshot.data().forEach((item) => {
    // //   this.productos.push({ id: item.id, data: item.data });
    // // });
    // // this.setState({ products: querySnapshot.docs });
    // // this.setState({ products: data });
    const q = query(collection(db, 'productos'));
    const productos = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
      productos.push({ id: doc.id, data: doc.data() });
    });

    this.setState({ productos });
  }
  render() {
    return (
      <div>
        <h4>Registro de productos</h4>
        <div className='dropdown-divider mb-4'></div>
        <div className="row">
          <div className="col-md-6">
            <FormProducto changeProducts={this.handleChangeProduct}/>
          </div>
        </div>
        <h4>Listado de productos</h4>
        <div className='dropdown-divider mb-4'></div>
        <ListadoProductos productos={this.state.productos} changeProducts={this.handleChangeProduct}/>
      </div>
    );
  }
}
