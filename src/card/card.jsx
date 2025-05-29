
import React from 'react';
import Card from './components/Card/Card';

import styles from './Card.module.css';
import Button from '../Button/Button';

const Card = ({ title, description, onButtonClick }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>


  
      <p>{description}</p>
      <Button label="Learn More" onClick={onButtonClick} variant="secondary" />
    </div>
  );
};

export default Card;
