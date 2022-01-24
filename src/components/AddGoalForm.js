import React from 'react';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";



function AddGoalForm( {riders, addGoal} ) {

    const [newGoal, setNewGoal] = useState({
        goal: '',
        rider_id: ''
    })

    let navigate = useNavigate()

    function handleChange(e) {
        setNewGoal({...newGoal,
            [e.target.name]: e.target.value
        })
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
            navigate('/goals')
        })
        //Need to send newGoal to Goals component and post new goal to backend
        // addGoal(newGoal)
    }

  return (
  <div>
        <form className='bg-white shadow-2xl rounded-lg pt-8 pb-8 px-40 md:items-center' onSubmit={handleSubmit}>
                <label className='outline-none font-bold p-4'>New Goal:  
                    <input className='px-4 py-2 ml-4 shadow border-b-2 rounded border-green-500' type="text" name="goal" value={newGoal.goal} onChange={handleChange} />
                </label>

                <label className='p-4 outline-none font-bold'>
                        Name:
                        <select className='px-4 py-2 ml-4 shadow border-b-2 rounded border-green-500' name="rider_id" onChange={handleChange}>
                            <option value="none">Select Rider</option>
                            {riders.map(rider => <option key={rider.id} value={rider.id} >{rider.name}</option>)}
                        </select>
                </label>

                <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' type="submit" value="Add" />
        </form>
  </div>
  )
}

export default AddGoalForm;
