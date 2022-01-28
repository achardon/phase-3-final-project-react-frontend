import React from 'react';
import {useState, useEffect} from 'react';
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

    function addGoal(newGoal) {
      setGoals([...goals, newGoal])
    }

    function deleteGoal(goal) {
      const updatedGoals = goals.filter(g => g.id !== goal.id)
      setGoals(updatedGoals)
    }

    return (

      <div className = "rounded-lg py-4 shadow-xl ">
        <h1 className="bg-green-700 text-6xl py-4 text-center">Goals</h1>

        <div className='bg-green-500 p-8 space-y-4 flex flex-col items-center'>

            {goals.map(goal => <Goal key={goal.id} goal={goal} deleteGoal={deleteGoal}/> )}

            <AddGoalForm riders={riders} addGoal={addGoal}/>
        </div>

      </div>

  )
}

export default Goals;
