import React from 'react';
import {useState} from 'react';

function EditRide( {ride, isEditing, setIsEditing} ) {

    const [updatedRide, setUpdatedRide] = useState({...ride})
    
    function handleChange(e) {
        setUpdatedRide({...updatedRide,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsEditing(() => !isEditing)
        console.log('update!')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className='outline-none placeholder-gray-500 font-bold focus:border-green-700'>
            Title:
                <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' type="text" name="name" value={ride.name} onChange={handleChange}/>
            </label>

            {/* <input className='font-bold text-xl leading-tight text-gray-900 pb-4' type="text" name="name" value={ride.name} onChange={handleChange}/> */}

            <label className='outline-none placeholder-gray-500 font-bold focus:border-green-700'>
            Date:
                <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' type="text" name="date" value={ride.date} onChange={handleChange}/>
            </label>

            {/* <p className='font-bold text-lg text-gray-700 pb-2'>Date: {ride.date}</p> */}

            <label className='outline-none placeholder-gray-500 font-bold focus:border-green-700'>
            Description:
                <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' type="text" name="description" value={ride.description} onChange={handleChange}/>
            </label>

            {/* <p className='font-bold text-lg text-gray-700 pb-2'>Details: {ride.description}</p> */}

            <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 shadow border-b-2 rounded border-green-500' type="submit" value="Update" />

        </form>
    </div>
  )
}

export default EditRide;
