import React from 'react';
import Edad from '../Edad/Edad';
import ListadoProductos from '../ListadoProductos/ListadoProductos';
import FormAuth from '../FormAuth/FormAuth';
import {Container, Row, Col } from 'react-bootstrap';

import './Body.css';

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      nombres: 'Anthony',
      años: 0,
    };
  }
  render() {
    return (
      <nav className='wrapper-body'>
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <FormAuth />
            </Col>
          </Row>
        </Container>

        <input type='text' onChange={(e) => this.setState({años: +e.target.value})} />
        <Edad años={this.state.años}></Edad>
        <ListadoProductos />
      </nav>
    );
  }
}
