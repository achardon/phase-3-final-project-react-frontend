import BikeRides from "./BikeRides";
import AddRider from "./AddRider";

function Riders( {onDelete, riders, bikeRides, onUpdate, addRider} ) {

    return(
        <div className = "py-4">
            <h1 className="bg-green-700 text-6xl py-4 text-center">Riders</h1>
                <div className="flex justify-center">
                    <AddRider addRider={addRider} />
                </div>
                <div className = "flex">
                    {riders.map(rider => {
                    return <BikeRides key={rider.id} rider={rider} rides={bikeRides} onDelete={onDelete} onUpdate={onUpdate}/>
                    }
                    )}
                </div>
        </div>
    )
}

export default Riders;
