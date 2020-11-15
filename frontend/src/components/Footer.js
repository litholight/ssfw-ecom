import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Stoneburner Software LLC
          </Col>
        </Row>
      </Container>
      footer
    </footer>
  );
};

export default Footer;
