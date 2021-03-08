import React from 'react';
import './Error.css';
import errorImg from '../../assets/404.png';
import PropTypes from 'prop-types';

const Error = ({error}) => {
  return (
    <>
      <div className='error'>
        <img src={errorImg} alt={'404 error'} className='error-image'/>
        <p className='error-message'>{error}</p>
        <p className='error-message'>Please reload the page or try again later.</p>
      </div>
    </>
  )
}

export default Error;

Error.propTypes = {
  question: PropTypes.string
};
