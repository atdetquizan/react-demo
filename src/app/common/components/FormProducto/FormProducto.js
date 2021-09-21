import React from 'react';
import {
  FormBuilder,
  Validators,
  FieldGroup,
  FieldControl,
} from 'react-reactive-form';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore/lite';
import { db } from '../../../Core/firebaseConfig';
import { TextInput } from '../TextInput/TextInput';

export default class FormProducto extends React.Component {
  productoForm = FormBuilder.group({
    title: ['', Validators.required],
    precie: ['', Validators.required],
    descuento: ['', Validators.required],
    image: ['', Validators.required],
  });
  
  constructor({props}) {
    super(props);
  }
  handleReset = () => {
    this.productoForm.reset();
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, 'productos', uuidv4()), this.productoForm.value);
    this.productoForm.reset();
    this.props.changeProducts();
  };
  render() {
    return (
      <FieldGroup
        control={this.productoForm}
        render={({ get, invalid }) => (
          <form onSubmit={this.handleSubmit}>
            <FieldControl
              name='title'
              render={TextInput}
              meta={{ label: 'Titulo de producto' }}
            />
            <FieldControl
              name='precie'
              render={TextInput}
              meta={{ label: 'Precio' }}
            />
            <FieldControl
              name='descuento'
              render={TextInput}
              meta={{ label: 'Descuento' }}
            />
            <FieldControl
              name='image'
              render={TextInput}
              meta={{ label: 'Imagen' }}
            />
            <div className='row'>
              <button
                type='button'
                className='btn btn-default col-md-6'
                onClick={this.handleReset}
              >
                Reset
              </button>
              <button
                type='submit'
                className='btn btn-primary col-md-6'
                disabled={invalid}
              >
                Crear
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}
