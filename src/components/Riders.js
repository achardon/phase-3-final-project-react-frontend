import BikeRides from "./BikeRides";

function Riders( {onDelete, riders, bikeRides, onUpdate} ) {

    return(
        <div className = "py-4">
            <h1 className="bg-green-700 text-6xl py-4 text-center">Riders</h1>
            {riders.map(rider => {
            return <BikeRides key={rider.id} rider={rider} rides={bikeRides} onDelete={onDelete} onUpdate={onUpdate}/>
            }
            )}
        </div>
    )
}

export default Riders;
