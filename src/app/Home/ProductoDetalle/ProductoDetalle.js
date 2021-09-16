import React from 'react';
import { withRouter } from 'react-router';
import ProductosConstant from '../../Common/constants/ProductosConstant';

import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../Core/firebaseConfig';

class ProductoDetalle extends React.Component {
  producto;
  constructor({ props }) {
    super(props);
  }

  async getProducts(){
    const citiesCol = collection(db, 'products');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log('getProducts', cityList);
    return cityList;
  }

  render() {
    this.getProducts();
    const id = this.props.match.params.productoId;
    this.producto = ProductosConstant.find((item) => item.id === +id);

    return (
      <div>
        nombre: {this.producto?.title}
        <br />
        precio: {this.producto?.precio}
        <br />
        descuento: {this.producto?.descuento}
        <br />
        <img
          src={this.producto?.image}
          alt={this.props.producto?.title}
          width='200px'
        />
      </div>
    );
  }
}

export default withRouter(ProductoDetalle);
