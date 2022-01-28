import Ride from "./Ride";

function BikeRides( {rider, rides, onDelete, onUpdate} ) {
        
    return (
        <div className='bg-green-500 p-8 grow'>
            <h2 className='font-bold text-xl text-gray-900 pb-4 pl-10'>{rider.name}</h2>
            <div className="p-4 space-y-4 ">
                {rides.map(ride => {
                    if (ride.rider_id === rider.id) {
                        return <Ride key={ride.id} ride={ride} onDelete={onDelete} onUpdate={onUpdate}/>
                    }
                    }
                )}
            </div>
        </div>
    )
}

export default BikeRides;
