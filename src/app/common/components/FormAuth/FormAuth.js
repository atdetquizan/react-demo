import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default class FormAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: 'asdasdas', password: 'asdsadas', checkbox: false };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check
            type='checkbox'
            label='Check me out'
            checked={this.state.checkbox}
            onChange={this.handleChangeCheckbox}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
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
