import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipDetails.css';

const StarshipDetails = ({location}) => {
  const starship = location.state;
  return (
    <div className='StarshipDetails'>
      {starship ?
        <div className='StarshipDetails-ship'>
          <p>SHIP NAME:</p>
          <p>{starship.name}</p>
          <p>SHIP MODEL:</p>
          <p>{starship.model}</p>
          <Link to='/'>ALL SHIPS</Link>
        </div>
        :
        <h3>May the Fourth be With You...</h3>
      }
    </div>
  );
};

export default StarshipDetails;