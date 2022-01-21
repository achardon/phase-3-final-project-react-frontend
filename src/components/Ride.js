import styled from "styled-components";

function Ride( {ride, onDelete} ) {

    function handleDelete() {
        fetch(`http://localhost:9292/bike_rides/${ride.id}`, {
            method: "DELETE"
        })
        onDelete(ride.id)
        // Why does this not work when I include the .thens below? It says there is an "uncaught (in promise) syntax error: unexpected end of JSON input at Ride js 6"
        // .then(r => r.json())
        // .then(data => {
        //     onDelete(ride.id)
        // })
    }

    return(
        <div >
            <h1>{ride.name}</h1>
            <em>Date: {ride.date}</em>
            <p>{ride.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Ride;

// const Card = styled.div`
//   text-align: left;
//   border: rgb(195, 137, 10) solid 5px;
//   padding: 1rem;
//   width: 300px;
//   // display: inline-grid;
//   margin: 10px;
// `;