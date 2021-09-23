import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  FormBuilder,
  Validators,
  FieldGroup,
  FieldControl,
} from 'react-reactive-form';
import { TextInput } from '../TextInput/TextInput';
import eventBus from '../../../Core/eventBus';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

export default class FormAuth extends React.Component {
  authForm = FormBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor({ props }) {
    super(props);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const values = this.authForm.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        // ...
        eventBus.dispatch('log-in', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          'Clave o/y contraseña incorrectos',
          errorCode,
          errorMessage
        );
      });
  };

  onClickLoginGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        eventBus.dispatch('log-in', user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  }

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
              meta={{
                title: 'Contraseña',
                label: 'Contraseña',
                type: 'password',
              }}
            />
            <div className='row px-0 mx-0'>
              <button
                type='submit'
                className='btn btn-primary col-md-12'
                disabled={invalid}
              >
                Authenticar
              </button>
              <button
                type='button'
                onClick={() => this.onClickLoginGoogle()}
                className='btn btn-danger mt-2 col-md-12'
              >
                Google Login
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
