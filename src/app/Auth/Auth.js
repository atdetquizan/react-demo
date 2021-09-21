import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormAuth from '../Common/components/FormAuth/FormAuth';

export default class Auth extends React.Component {

constructor({props}) {
    super(props);
}

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={4}>
            <FormAuth />
          </Col>
        </Row>
      </Container>
    );
  }
}
