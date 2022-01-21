import BikeRides from "./BikeRides";
import styled from 'styled-components';


function Riders( {onDelete, riders} ) {

    return(
        <div className = "rounded-lg px-60 py-4 ring-1 ring-slate-900/5 shadow-xl">
            {riders.map(rider => <BikeRides key={rider.id} name={rider.name} rides={rider.bike_rides} onDelete={onDelete}/>)}
        </div>
    )
}

export default Riders;

// const Rider = styled.div`
// background-color: #282c34;
// `