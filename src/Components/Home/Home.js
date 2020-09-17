import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../../fakeData/MainPage/MainPage';
import travelDocument from '../../fakeData/travelDocuments';
import Booking from '../Booking/Booking';
import { useContext } from 'react';





import Header from '../Header/Header';
// import Details from './Details/Details';
import './Home.css';
import { DestinationContext } from '../../App';




const Home = () => {
    const [destination, setDestination] = useContext(DestinationContext)
    const [location, setLocation] = useState(travelDocument)
    const [item, setItem] = useState('SUNDARBANS')
    // const[destination,setDestination]=useState({})
    const handleMouseMove = (param) => {
        setItem(param)
    }

    useEffect(() => {

        let selected = travelDocument.find(area => area.name === (item))
        setDestination(selected)
    }, [item])

    const { name, description } = destination;
    console.log(name, description)


    const [coxBazar, sreemangal, sundarban] = location;
    return (
        <div className="home-body">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="name">{name}</h2>
                        <h5 className="name">{description}</h5>
                        <Link to="/booking">
                            <button className="booking-button">booking</button>
                        </Link>

                    </div>
                    <div className="col place">
                        <div className="card-group">
                            <div className="card">
                                <div classNameName="card-body" onMouseMove={() => { handleMouseMove(coxBazar.name) }}>
                                    <img src={coxBazar.image} className="card-img" alt="..." />
                                    <h5>{coxBazar.name}</h5>
                                </div>
                            </div>
                            <div className="card">
                                <div classNameName="card-body" onMouseMove={() => { handleMouseMove(sreemangal.name) }}>
                                    <img src={sreemangal.image} className="card-img" alt="..." />
                                    <h5>{sreemangal.name}</h5>
                                </div>
                            </div>
                            <div className="card">
                                <div classNameName="card-body" onMouseMove={() => { handleMouseMove(sundarban.name) }}>
                                    <img src={sundarban.image} className="card-img" alt="..." />
                                    <h5>{sundarban.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;