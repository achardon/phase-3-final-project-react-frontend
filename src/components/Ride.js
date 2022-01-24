import styled from "styled-components";

function Ride( {ride, onDelete} ) {

    function handleDelete() {
        fetch(`http://localhost:9292/bike_rides/${ride.id}`, {
            method: "DELETE"
        })
        onDelete(ride.id)
        // Why does this throw an error when I include the .thens below? It says there is an "uncaught (in promise) syntax error: unexpected end of JSON input at Ride js 6" even though it does delete the ride..
        // .then(r => r.json())
        // .then(data => {
        //     onDelete(ride.id)
        // })
    }

    return(
        // <div className='bg-green-600 py-4 rounded-lg outline-none placeholder-gray-500 font-bold focus:border-green-700 placeholder-gray-500 leading-tight focus:border-green-700'>
            <div className='bg-white p-8 rounded-lg shadow-2xl max-w-md'>
                <h1 className='font-bold text-xl leading-tight text-gray-900 pb-4'>{ride.name}</h1>
                <em className='font-bold text-lg text-gray-700 pb-2'>Date: {ride.date}</em>
                <p className='font-bold text-lg text-gray-700 pb-2'>{ride.description}</p>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mx-1' onClick={handleDelete}>Delete</button>
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