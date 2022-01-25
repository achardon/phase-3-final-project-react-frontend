import Ride from "./Ride";
import styled from "styled-components";

function BikeRides( {rider, rides, onDelete} ) {
        
    //How do I get the two columns to show up next to each other?

    return (
        <div className='bg-green-500 p-8 flex-col'>
            <div>
                <h2 className='font-bold text-xl text-gray-900 pb-4'>{rider.name}</h2>
                <div className="p-4 space-y-4 ">
                    {rides.map(ride => {
                        if (ride.rider_id === rider.id) {
                            return <Ride key={ride.id} ride={ride} onDelete={onDelete}/>
                        }
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default BikeRides;

//add to bike ride cards:
//route name, distance
//if route does not exist, it should create a new route and add to data base

//ActiveRecord - to get rider name: BikeRide.second.rider.name

//need to import styled components in order to use the following code:
//npm i styled-components
// const Card = styled.div`
// //   display: flex;  
//   text-align: center;
//   border: rgb(195, 137, 10) solid 8px;
//   padding: 1rem;
//   width: 400px;
//   display: inline-grid;
//   margin: 25px;
//   box-shadow: 8px 8px #e04b52;
//   background-color: white;
// //   img {
// //     height: 150px;
// //     justify-self: center;
// //   }
// `;