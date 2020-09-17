import React from 'react';
import './HotelDetails.css';

const HotelDetails = (props) => {
    // console.log(props.hotel)
    const { details, image, price, rating, title, unique } = props.hotel;
    const { guests, bedroms, beds, baths } = details;
    console.log(guests, bedroms, beds, baths, image, price, rating, title, unique,)
    return (
        <div classNameName="details-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                    <div className="col">
                        <h6>{title}</h6>
                        <div classNameName="details">
                            <small>{`${guests} guests ${bedroms} bedrooms ${beds} beds ${baths} baths`}</small>
                        </div>
                        <small>{unique}</small>
                        <h6>$ {price}/night</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;