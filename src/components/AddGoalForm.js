import React from 'react';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function AddGoalForm( {riders, addGoal} ) {

    const [newGoal, setNewGoal] = useState({
        goal: '',
        rider_id: '',
        rider: {
            id: '',
            name: ''
        }
    })

    let navigate = useNavigate()

    function handleChange(e) {
        const selectedRider = riders.filter(r => r.id === parseInt(e.target.value)) 
        if (e.target.name === "rider_id") {
            setNewGoal({...newGoal,
                rider_id: e.target.value,
                rider: {
                    id: e.target.value,
                    name: selectedRider[0].name
                }
            })
        }
        else {
            setNewGoal({...newGoal,
                [e.target.name]: e.target.value
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/goals", {
            method: "POST",    
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGoal)
        })
        .then(r => r.json())
        .then(data => {
            addGoal(data)
            // alert('Success!')
            setNewGoal({
                goal: '',
                rider_id: '',
                rider: {
                    id: '',
                    name: ''
                }
            })
            navigate('/goals')
        })
    }

  return (
  <div>
        <form className='bg-blue-300 shadow-2xl rounded-lg pt-8 pb-8 px-20 md:items-center' onSubmit={handleSubmit}>
                <label className='outline-none font-bold p-4'>New Goal:  
                    <input className='px-4 py-2 ml-4 shadow border-b-2 rounded border-green-500' type="text" name="goal" value={newGoal.goal} onChange={handleChange} />
                </label>

                <label className='p-4 outline-none font-bold'>
                        Name:
                        <select className='px-4 py-2 ml-4 shadow border-b-2 rounded border-green-500' name="rider_id" onChange={handleChange}>
                            <option value="none">Select Rider</option>
                            {riders.map(rider => <option key={rider.name} value={rider.id} >{rider.name}</option>)}
                        </select>
                </label>

                <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' type="submit" value="Add" />
        </form>
  </div>
  )
}

export default AddGoalForm;
