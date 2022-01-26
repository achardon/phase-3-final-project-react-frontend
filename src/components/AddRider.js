import React from 'react';
import {useState} from 'react';

function AddRider( {addRider} ) {

    const [newRider, setNewRider] = useState('')

    function handleChange(e) {
        setNewRider(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/riders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: newRider})
        })
        .then(r => r.json())
        .then(data => {
            addRider(data)
        })
    }


  return (
      <div >
          <form className='bg-white  p-14 pt-6 pb-8' onSubmit={handleSubmit}>
              <label className='py-4 placeholder-gray-500 font-bold focus:border-green-700'>
                  New Rider Name:
                  <input className='px-4 ml-4 mr-4 shadow border-b-2 rounded border-green-500 text-md text-gray-700 focus:border-green-700' type="text" value={newRider} onChange={handleChange} />
              </label>
              <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded' type="submit" value="Add Rider"/>
          </form>
      </div>
  )
}

export default AddRider;
