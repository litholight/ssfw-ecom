import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Your new store',
  keywords: 'ecommerce, sales, stoneburnersoftware',
  description: 'We have the best ecommerce platform',
};

export default Meta;
