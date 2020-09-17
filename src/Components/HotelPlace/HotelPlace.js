import React from 'react';
import Header from '../Header/Header';

import { useContext } from 'react';
import { DestinationContext } from '../../App';
import HotelDetails from '../HotelDetails/HotelDetails';

const HotelPlace = () => {
    const [destination, setDestination] = useContext(DestinationContext);
    console.log(destination);
    const { name, more } = destination;
    console.log(name, more);
    return (
        <div className="hotelPlace-body">
            <Header></Header>
            <div className="container container-body">
                <div className="row">
                    <div className="col">
                        <small>245 stays January 21-20 4guests</small>
                        <h5>Stay in {name}</h5>
                        {
                            destination.name && more.map(hotel => <HotelDetails hotel={hotel}></HotelDetails>)
                        }
                    </div>
                    <div className="col">
                        <div className="map-area">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelPlace;