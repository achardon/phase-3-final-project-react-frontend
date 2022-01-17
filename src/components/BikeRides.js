import {useState, useEffect} from "react";
import Ride from "./Ride";
import styled from "styled-components";


function BikeRides( {name, rides} ) {

    // const [bikeRides, setBikeRides] = useState([])
    
    // useEffect(() => {
    //     fetch('http://localhost:9292/bike_rides')
    //     .then(r => r.json())
    //     .then(data => {
    //         setBikeRides(data)
    //     })
    // }, [])
        
    return (
        <Card>
            <h2 style={{textAlign:"center"}}>{name}</h2>
            {/* <button style={{width: 80}}>Add Ride</button> */}
            {rides.map(ride => {
                return <Ride key={ride.id} ride={ride} />
                }
            )}
        </Card>
    )
}

export default BikeRides;

//ActiveRecord - to get rider name: BikeRide.second.rider.name

//need to import styled components in order to use the following code:
//npm i styled-components
const Card = styled.div`
//   display: flex;  
  text-align: center;
  border: rgb(195, 137, 10) solid 8px;
  padding: 1rem;
  width: 400px;
  display: inline-grid;
  margin: 25px;
  box-shadow: 8px 8px #e04b52;
//   img {
//     height: 150px;
//     justify-self: center;
//   }
`;