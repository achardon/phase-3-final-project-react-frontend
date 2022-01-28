import React from 'react';
import {useState} from 'react';

function EditRide( {ride, isEditing, setIsEditing, onUpdate} ) {

    const [updatedRide, setUpdatedRide] = useState({...ride})
    
    function handleChange(e) {
        setUpdatedRide({...updatedRide,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsEditing(() => !isEditing)
        fetch(`http://localhost:9292/bike_rides/${ride.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRide)
        })
        .then(r => r.json())
        .then(data => {
            onUpdate(updatedRide)
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <label className='font-bold focus:border-green-700'>
            Title:
                <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 focus:border-green-700' type="text" name="name" value={updatedRide.name} onChange={handleChange}/>
            </label>

            <label className='font-bold'>
            Date:
                <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 focus:border-green-700' type="text" name="date" value={updatedRide.date} onChange={handleChange}/>
            </label>

            <label className='font-bold'>
            Description:
                <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 focus:border-green-700' type="text" name="description" value={updatedRide.description} onChange={handleChange}/>
            </label>

            <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 shadow border-b-2 rounded border-green-500' type="submit" value="Update" />

        </form>
    </div>
  )
}

export default EditRide;
