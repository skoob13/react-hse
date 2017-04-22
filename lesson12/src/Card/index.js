import React, { PropTypes } from 'react';import Badge from '../Badge';
import './styles.css';

const Card = ({ id, children, onClick, color }) => (
  <div
    className="card"
    onClick={() => onClick(id)}
  >
    <Badge color={color} />
    <span>{children}</span>
  </div>
);

Card.propTypes ={
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Card;
