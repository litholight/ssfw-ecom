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

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push('/');
  //   }
  // }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(storeCreate(email, password, storeName));
  };
  return (
    <Container>
      <h1>Start your prototype!</h1>
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
        <Button type="submit" variant="primary">
          Create protoype store
        </Button>
      </Form>
    </Container>
  );
};

export default CreateStore;
