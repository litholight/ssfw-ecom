import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
// import { storeCreate } from '../actions/userActions';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Message from '../components/Message';

const TipsScreen = ({ history, location }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   dispatch(storeCreate(email, password, storeName));
  // };
  return (
    <Container>
      <h1>Welcome to your new store</h1>
      {error && <Message variant="danger">{error}</Message>}
      <p>Here are some tips to get started:</p>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Sign In. This allows you access to the administration features of the
          platform
        </ListGroup.Item>
        <ListGroup.Item>
          Change Your Store Name. After you sign in click on Admin -> Store
          Details in navigation bar.
        </ListGroup.Item>
        <ListGroup.Item>
          Add some products or services. This is in the Admin section.
        </ListGroup.Item>
        <ListGroup.Item>
          Check out the Features to Add. This is in the Admin section.
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default TipsScreen;
