import React, { PropTypes } from 'react';
import './styles.css';

const Heading = ({ children, className }) => (
  <h1 className={`heading ${className}`}>{children}</h1>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
