import React from 'react';
import Map from'react-leaflet';
import TileLayer from 'react-leaflet';

const Maps = (props) => {
   const locationName=props.name;
   console.log(locationName)
   const setPositionOfMap=(location)=>{
        if(location==="COX'S BAZAR"){
            const position=[21.4272, 92.058];
        }
        else if(location==="SREEMANGAL"){
            const position=[21.9900, 89.480]
        }
        else if(location==="SUNDARBANS"){
            const position=[24.310577, 91.725136]
        }
   }

    return (
        <>

            <Map center={setPositionOfMap(locationName)} zoom={10} className="main-map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        </>
    );
};

export default Maps;