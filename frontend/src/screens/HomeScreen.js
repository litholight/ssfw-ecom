import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Meta from '../components/Meta';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ProductCarousel from '../components/ProductCarousel';
// import { listProducts } from '../actions/productActions';
import { getStoreDataFromIPorName } from '../actions/storeActions';

const HomeScreen = ({ history, match }) => {
  const keyword = match.params.keyword;
  const uri = 'http://localhost:3000/';
  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);

  // const { userInfo } = userLogin;

  const store = useSelector((state) => state.store);
  const { storeData } = store;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    if (!storeData) {
      dispatch(getStoreDataFromIPorName(null, uri));
      // history.push('/tips');
    }
  }, [storeData, dispatch]);

  // useEffect(() => {
  //   if (!loadingStoreData) {
  //     if (storeData && storeData.storeInitialized === false) {
  //       history.push('/createstore');
  //     }
  //   }
  //   dispatch(getStoreData(uri));
  //   dispatch(listProducts(keyword));
  //   dispatch(listProducts(keyword));
  // }, [dispatch, getStoreData, storeData, keyword]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Now available</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
