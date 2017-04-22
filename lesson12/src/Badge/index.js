import React, { PropTypes } from 'react';
import './styles.css';

const Badge = ({ color }) => (
  <div
    className="badge"
    style={{ background: color }}
  />
);

Badge.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Badge;
