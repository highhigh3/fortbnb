// import React from "react";
import './SpotCard.css';

const SpotCard = ({ spot }) => {
    return (
        <div>
            <div className='card-container'>
                <div className='spotImage-container'>
                    <img className='spotImage' src={spot.previewImage} alt="Spot preview" />
                </div>
                <div className='info-containter'>
                    <span>{`${spot.city}, ${spot.state}`}</span>
                    <span>{`⭐️${spot.avgRating}`}</span>
                </div>
                <div className='top-containter spot-text'>
                </div>
                <div className='middle-containter'></div>
                    <p className='spot-text'>{spot.name}</p>
                <div className='bottom-containter'></div>
                    <span className='spot-text spot-price'>{`$${spot.price}`}</span>
                    <span className='spot-text'>night</span>



            </div>
        </div>
    );
};

export default SpotCard;
