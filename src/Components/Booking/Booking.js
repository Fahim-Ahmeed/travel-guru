import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DestinationContext } from '../../App';
import Header from '../Header/Header';
import './Booking.css';



const Booking = () => {
    const [destination, setDestination] = useContext(DestinationContext)
    const history = useHistory()
    const handleBooking = () => {
        history.push('/place');
    }
    const handleBookingDate = (event) => {
        const bookingDetails = { ...destination }
        bookingDetails[event.target.name] = event.target.value;
        setDestination(bookingDetails)

    }

   
    return (
        <div className="booking-body">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="name">{destination.name}</h2>
                        <h5 className="name">{destination.description}</h5>
                    </div>
                    <div className="col  card">
                        <form action="" onSubmit={handleBooking}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1" >Origin</label>
                                <input type="text" className="form-control" onBlur={handleBookingDate} name="origin" id="exampleFormControlInput1" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Destination</label>
                                <input type="text" className="form-control" name="destination" id="exampleFormControlInput1" onBlur={handleBookingDate} value={destination.name} />
                            </div>
                            <div className="row">
                                <div className="col">
                                
                                    <label htmlFor="exampleFormControlInput1">from</label>
                                    <input type="date" className="form-control" onBlur={handleBookingDate} name="from" id="exampleFormControlInput1" required />
                                 
                                </div>
                                <div className="col">
                                   
                                    <label htmlFor="exampleFormControlInput1"  >to</label>
                                    <input type="date" className="form-control" onBlur={handleBookingDate} name="to" id="exampleFormControlInput1" required />
                                   
                                </div>
                            </div>

                            <label htmlFor="exampleInputEmail1"></label>
                            <input type="submit" className="form-control" style={{ color: 'black', backgroundColor: 'goldenrod' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;