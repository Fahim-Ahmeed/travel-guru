import React from 'react';
import Header from '../Header/Header';
import'./HotelPlace.css';
import { useContext } from 'react';
import { DestinationContext } from '../../App';
import HotelDetails from '../HotelDetails/HotelDetails';
// import Maps from '../../Maps/Maps';
import{ Map,TileLayer,Popup,Marker} from'react-leaflet';
import {Icon} from'leaflet';
import L from 'leaflet'

const HotelPlace = () => {
    const [destination, setDestination] = useContext(DestinationContext);
    console.log(destination);
    const { name, more } = destination;
    console.log(name, more);
    const setPositionOfMap=(location)=>{
        if(location==="COX'S BAZAR"){
            const position=[21.4272, 92.058];
            return position;
        }
        else if(location==="SREEMANGAL"){
            const position=[21.9900, 89.480]
            return position;
        }
        else if(location==="SUNDARBANS"){
            const position=[24.310577, 91.725136]
            return position;
        }
   }
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
                    <div className="col map-area">
                    <Map center={setPositionOfMap(name)} zoom={10} className="main-map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
                          
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelPlace;