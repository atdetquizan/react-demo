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

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div class="form-group mb-1">
    <input class="form-control" placeholder={`Enter ${meta.label}`} {...handler()} />
    <span>
      {touched && hasError('required') && `${meta.label} is required`}
    </span>
  </div>
);

export default class FormProducto extends React.Component {
  productoForm = FormBuilder.group({
    title: ['', Validators.required],
    precie: ['', Validators.required],
    descuento: ['', Validators.required],
    image: ['', Validators.required],
  });
  handleReset = () => {
    this.productoForm.reset();
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form values', this.productoForm.value);
    await setDoc(doc(db, 'productos', uuidv4()), this.productoForm.value);
    this.productoForm.reset();
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
            <div class="row">
              <button type='button' class="btn btn-default col-md-6" onClick={this.handleReset}>
                Reset
              </button>
              <button type='submit' class="btn btn-primary col-md-6" disabled={invalid}>
                Crear
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}
