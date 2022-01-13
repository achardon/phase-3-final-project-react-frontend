import {useState, useEffect} from "react";
import Ride from "./Ride";

function BikeRides() {

    const [bikeRides, setBikeRides] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/bike_rides')
        .then(r => r.json())
        .then(data => {
            setBikeRides(data)
        })
    }, [])
    
    console.log(bikeRides)
    
    return (
        <div>
            <h2>Bike Rides</h2>
            {bikeRides.map(ride => <Ride key={ride.id} ride={ride} />)}
        </div>
    )
}

export default BikeRides;