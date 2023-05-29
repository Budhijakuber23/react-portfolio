import React from 'react';
import './Card.css';

const Card = ({ image, title, description, url }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`
};

  return (
    <div className="card" style={cardStyle}>
      <div className="content">
        <h3>{title}</h3>
        <br></br>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className='button'>{description}</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
