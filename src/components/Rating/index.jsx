import React from 'react'
import star from '../../img/star.svg'
import starFilled from '../../img/star-filled.svg'

export const Rating = () => {
    return (
        <div className="filter__options__rating">
            <h2>Rating</h2>
            <div>
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <p>& Up</p>
                <p>8500</p>
            </div>
            <div>
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={star} alt="star icon" />
                <p>& Up</p>
                <p>3250</p>
            </div>
            <div>
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={starFilled} alt="star filled icon" />
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
                <p>& Up</p>
                <p>1120</p>
            </div>
        </div>
    )
}
