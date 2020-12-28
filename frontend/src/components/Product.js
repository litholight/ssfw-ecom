import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card
      className="mr-1 mb-2 rounded"
      style={{
        textAlign: 'center',
      }}
    >
      <Link to={`/product/${product._id}`} style={{ margin: '0 auto' }}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ height: '266px', width: 'auto' }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title
            as="div"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
