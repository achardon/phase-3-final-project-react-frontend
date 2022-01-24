import BikeRides from "./BikeRides";
import styled from 'styled-components';


function Riders( {onDelete, riders, bikeRides} ) {

    return(
        <div className = "py-4">
            <h1 className="bg-green-700 text-6xl py-4 text-center">Riders</h1>
            {riders.map(rider => {
            return <BikeRides key={rider.id} rider={rider} rides={bikeRides} onDelete={onDelete}/>
            }
            )}
        </div>
    )
}

export default Riders;

// const Rider = styled.div`
// background-color: #282c34;
// `