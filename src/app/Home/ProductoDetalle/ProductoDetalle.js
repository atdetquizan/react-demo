import React from 'react';
import { withRouter } from 'react-router';
import ProductosConstant from '../../Common/constants/ProductosConstant';

class ProductoDetalle extends React.Component {
producto;
  constructor({ props }) {
    super(props);
  }

  render() {
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
        <img src={this.producto?.image} alt={this.props.producto?.title} width="200px" />
      </div>
    );
  }
}

export default withRouter(ProductoDetalle);
