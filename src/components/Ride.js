function Ride( {ride} ) {

    console.log(ride)

    return(
        <div>
            <h3>{ride.name} ({ride.distance} miles)</h3>
            <p>{ride.description}</p>
        </div>
    )
}

export default Ride;