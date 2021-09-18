import React from 'react';
import { withRouter } from 'react-router';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../../Core/firebaseConfig';

class ProductoDetalle extends React.Component {
  producto;
  constructor({ props }) {
    super(props);
    this.state = { producto: {} };
  }

  async componentDidMount() {
    const id = this.props.match.params.productoId;
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);
    
    this.setState({ producto: docSnap.data() });
  }
  render() {
    // this.getProducts();
    // this.producto = ProductosConstant.find((item) => item.id === +id);

    return (
      <div>
        nombre: {this.state.producto?.title}
        <br />
        precio: {this.state.producto?.precie}
        <br />
        descuento: {this.state.producto?.descuento}
        <br />
        <img
          src={this.state.producto?.image}
          alt={this.state.producto?.title}
          width='200px'
        />
      </div>
    );
  }
}

export default withRouter(ProductoDetalle);
