import React, { useState, useEffect } from 'react';
import { storeCreate } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';

const CreateStore = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [storeName, setStoreName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(`storecreate(${email}, ${password}, ${storeName})`);
    dispatch(storeCreate(email, password, storeName));
    console.log('store data!');
  };
  return (
    <Container>
      <h1>Start your prototype!</h1>
      {error && <Message variant="danger">{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="storeName">
          <Form.Label>Store Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your store name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <p>Verify your email and password</p>
        {loading && <Loader />}
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Create protoype store
        </Button>
      </Form>
    </Container>
  );
};

export default CreateStore;
