import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 

const Card = ({gunData, handleAddToCart}) => {
    const { name, img, bullet, capacity, action, price,id } = gunData;
    
    
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className="gun">
                <h1>{name}</h1>
                <p>Bullet Type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div>
                <button
                    onClick={() => handleAddToCart(gunData)}>
                    <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />Add To Card
                </button>
                <h1>${ price }</h1>
            </div>
        </div>
    );
};

export default Card;