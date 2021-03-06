import React from 'react';
import './Card.css';
import couch from '../../assets/couch.png';
import PropTypes from 'prop-types';

const Card = ({question}) => {
  return (
    <div className='game-card'>
      <img src={couch} alt='icon' className='card-icon'/>
      <h2 className='question'>{`"${question}"`}</h2>
    </div>
  )
}

export default Card;

Card.propTypes = {
  question: PropTypes.string
};
