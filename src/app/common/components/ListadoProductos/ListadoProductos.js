import React from 'react';
import ItemProducto from '../ItemProducto/ItemProducto';
// import ProductosConstant from '../../constants/ProductosConstant';
import './ListadoProductos.css';

// import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { query, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../../Core/firebaseConfig';

export default class ListadoProductos extends React.Component {
  // productos = [];
  constructor({ props }) {
    super(props);
    this.state = { productos: [] };
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
      console.log(doc.id, ' => ', doc.data());
      productos.push({ id: doc.id, data: doc.data() });
    });

    this.setState({ productos });
  }

  render() {
    console.log('this.productos', this.productos);
    return (
      <div className='wrapper-listado-productos row justify-content-center'>
        {this.state.productos.map((item, index) => (
          <div className='col-md-3 mb-3' key={index} >
            <ItemProducto id={item.id} producto={item.data} />
          </div>
        ))}
      </div>
    );
  }
}
