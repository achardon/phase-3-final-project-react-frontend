import React from 'react';
import {useState, useEffect} from 'react';

function Goals() {

    const [goals, setGoals] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/goals')
        .then(r => r.json())
        .then(data => {
            setGoals(data)
        })
    }, [])

    console.log(goals)

    //How do I use rider_name function from backend to get name to appear for each goal here? (instead of right now where it is just displaying the id?)

    return (

      <div className = "rounded-lg py-4 shadow-xl ">
        <h1 className="bg-green-700 text-6xl py-4 text-center">Goals</h1>
        <div className='bg-green-500 p-8'>
            {goals.map(goal => <p key={goal.id}>{goal.goal} ({goal.rider_id})</p>)}
        </div>

      </div>

  )
}

export default Goals;
