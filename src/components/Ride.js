import {useState} from 'react';
import EditRide from "./EditRide";

function Ride( {ride, onDelete, onUpdate} ) {

    const [isEditing, setIsEditing] = useState(false)

    function handleDelete() {
        fetch(`http://localhost:9292/bike_rides/${ride.id}`, {
            method: "DELETE"
        })
        .then(data => {
            onDelete(ride.id)
        })
    }

    function handleEdit() {
        setIsEditing(() => !isEditing)
    }
    
    return(       
        <div className='bg-white p-8 rounded-lg shadow-2xl max-w-md'>
            {isEditing ? (
            <EditRide ride={ride} isEditing={isEditing} setIsEditing={setIsEditing} onUpdate={onUpdate}/>
            ) : (
                <>
                    <h1 className='font-bold text-xl text-gray-900 pb-2'>{ride.name}</h1>
                    <em className='text-lg text-gray-700 pb-8'>Route: {ride.route.title}</em>
                    <p className='text-lg text-gray-700 pb-2 pt-4 pl-4'>Date: {ride.date}</p>
                    <p className='text-lg text-gray-700 pb-2 pl-4'>
                        {ride.route.distance? `Distance: ${ride.route.distance} miles` : null}
                    </p>
                    <p className='text-lg text-gray-700 pb-6 pl-4'>Details: {ride.description}</p>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-1' onClick={handleEdit}>Edit</button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1' onClick={handleDelete}>Delete</button>
                </>
                )
            }
         </div>
    )
}

export default Ride;
