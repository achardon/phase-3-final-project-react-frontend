import {useState, useEffect} from "react";
import Ride from "./Ride";
import styled from "styled-components";


function BikeRides( {name} ) {

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
        <Card>
            <h2>{name}</h2>
            {bikeRides.map(ride => {
                return <Ride key={ride.id} ride={ride} />
                }
            )}
        </Card>
    )
}

export default BikeRides;

//need to import styled components in order to use the following code:
//npm i styled-components
const Card = styled.div`
  display: flex;  
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