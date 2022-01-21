import React from 'react';
import {useState, useEffect} from 'react';
import AddRideForm from './AddRideForm';
import Goal from './Goal';
import AddGoalForm from './AddGoalForm';

function Goals( {riders} ) {

    const [goals, setGoals] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/goals')
        .then(r => r.json())
        .then(data => {
            setGoals(data)
        })
    }, [])

    console.log(goals)

    //How do I use rider_name function from backend to get name to appear for each goal here? (instead of right now where it is just displaying the id?) I made a method called rider_name in backend. How can I use Goal.rider_name here to display name?

    return (

      <div className = "rounded-lg py-4 shadow-xl ">
        <h1 className="bg-green-700 text-6xl py-4 text-center">Goals</h1>


        <div className='bg-green-500 p-8 space-y-4 text-center'>

            {goals.map(goal => <Goal key={goal.id} goal={goal}/> )}

            <AddGoalForm riders={riders} />
        </div>

      </div>

  )
}

export default Goals;
