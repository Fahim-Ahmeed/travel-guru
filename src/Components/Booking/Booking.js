import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DestinationContext } from '../../App';
import Header from '../Header/Header';
import './Booking.css';



const Booking = () => {
    const [destination, setDestination] = useContext(DestinationContext)
    console.log(destination)
    return (
        <div className="booking-body">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="name">{destination.name}</h2>
                        <h5 className="name">{destination.description}</h5>
                    </div>
                    <div className="col card">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Origin</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Destination</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" value={destination.name} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <form>
                                        <label for="exampleFormControlInput1">from</label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" />
                                    </form>
                                </div>
                                <div className="col">
                                    <form>
                                        <label for="exampleFormControlInput1"  >to</label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" />
                                    </form>
                                </div>
                            </div>
                            <Link to="create">
                                <button className="start-booking"> start booking </button>
                            </Link>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;