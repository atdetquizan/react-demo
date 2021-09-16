import React from 'react';
import ItemProducto from '../ItemProducto/ItemProducto';
import ProductosConstant from '../../constants/ProductosConstant';
import './ListadoProductos.css';

// import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { query, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../../Core/firebaseConfig';

export default class ListadoProductos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }
  async getProducts() {
    // , where("capital", "==", true)
    const q = query(collection(db, "productos"));

    const querySnapshot = await getDocs(q);
    this.setState({ products: querySnapshot.docs });
  }

  render() {
    this.getProducts();
    return (
      <div className='wrapper-listado-productos row justify-content-center'>
        {this.state.products.map((item) => (
          <div className="col-md-3 mb-3">
            <ItemProducto key={item.id} producto={item.data()} />
          </div>
        ))}
      </div>
    );
  }
}
