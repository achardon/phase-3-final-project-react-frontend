import styled from "styled-components";

function Ride( {ride} ) {

    return(
        <Card>
            <h2>{ride.name}</h2>
            <h4>Date: {ride.date}</h4>
            <p>{ride.description}</p>
            <button>Delete</button>
        </Card>
    )
}

export default Ride;

const Card = styled.div`
  text-align: left;
  border: rgb(195, 137, 10) solid 5px;
  padding: 1rem;
  width: 300px;
  // display: inline-grid;
  margin: 10px;
`;