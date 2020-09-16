import React, { useContext } from 'react';
import { DestinationContext } from '../../App';
import './Booking.css';



const Booking = () => {
    const [destination, setDestination] = useContext(DestinationContext)
    console.log(destination)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="name">{destination.name}</h2>
                        <h5 className="name">{destination.description}</h5>
                    </div>
                    <div className="col card">
                        <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Origin</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Destination</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" value={destination.name}/>
  </div>
  <div class="row">
    <div class="col">
    <form>
     <label for="exampleFormControlInput1">from</label>
     <input type="date"class="form-control" id="exampleFormControlInput1" />
     </form>
    </div>
    <div class="col">
     <form>
     <label for="exampleFormControlInput1"  >to</label>
     <input type="date"  class="form-control" id="exampleFormControlInput1"/>
     </form>
    </div>
    </div>
 
</form>
<button className="start-booking"> start booking </button>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;