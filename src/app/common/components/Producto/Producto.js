import React from 'react';
import './Producto.css';
export default class Producto extends React.Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    return (
      <div className='content-proudcto'>
        <div className='content-proudcto__title'>
          {this.props.producto.title}
        </div>
        <div className='content-proudcto__image'>
          <img src={this.props.producto.image} alt={this.props.producto.title} />
        </div>
      </div>
    );
  }
}
