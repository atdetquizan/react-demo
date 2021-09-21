import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  FormBuilder,
  Validators,
  FieldGroup,
  FieldControl,
} from 'react-reactive-form';
import { TextInput } from '../TextInput/TextInput';
export default class FormAuth extends React.Component {
  authForm = FormBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor({ props }) {
    super(props);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.submitLogin(this.authForm.value);
  };

  render() {
    return (
      <FieldGroup
        control={this.authForm}
        render={({ get, invalid }) => (
          <form onSubmit={this.handleSubmit}>
            <FieldControl
              name='username'
              render={TextInput}
              meta={{ title: 'Usuario', label: 'Usuario' }}
            />
            <FieldControl
              name='password'
              render={TextInput}
              meta={{ title: 'Contraseña', label: 'Contraseña', type: 'password' }}
            />
            <div className='row px-0 mx-0'>
              <button
                type='submit'
                className='btn btn-primary col-md-12'
                disabled={invalid}
              >
                Authenticar
              </button>
            </div>
          </form>
        )}
      />

      // <Form onSubmit={this.handleSubmit}>
      //   <Form.Group className='mb-3' controlId='formBasicEmail'>
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control
      //       type='email'
      //       placeholder='Enter email'
      //       value={this.state.email}
      //       onChange={this.handleChangeEmail}
      //     />
      //     <Form.Text className='text-muted'>
      //       We'll never share your email with anyone else.
      //     </Form.Text>
      //   </Form.Group>

      //   <Form.Group className='mb-3' controlId='formBasicPassword'>
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control
      //       type='password'
      //       placeholder='Password'
      //       value={this.state.password}
      //       onChange={this.handleChangePassword}
      //     />
      //   </Form.Group>
      //   <Button variant='primary' type='submit'>
      //     Authenticar
      //   </Button>
      // </Form>
    );
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeCheckbox(event) {
    this.setState({ checkbox: event.target.checked });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', event);
    console.log(this.state);
  }
}
