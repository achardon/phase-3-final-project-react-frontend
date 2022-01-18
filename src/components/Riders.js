import BikeRides from "./BikeRides";
import styled from 'styled-components';


function Riders( {onDelete, riders} ) {

    return(
        <Rider>
            {riders.map(rider => <BikeRides key={rider.id} name={rider.name} rides={rider.bike_rides} onDelete={onDelete}/>)}
        </Rider>
    )
}

export default Riders;

const Rider = styled.div`
background-color: #282c34;
`