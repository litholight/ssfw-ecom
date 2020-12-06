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
  title: "Sophia's Used Books",
  keywords: 'philosophy of science, books, used books, ecommerce, sales',
  description:
    'We have one of the largest philosophy of science books collection available',
};

export default Meta;
