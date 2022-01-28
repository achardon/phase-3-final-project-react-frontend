import React from 'react';

function Goal( {goal, deleteGoal} ) {

  function handleDelete() {
    fetch(`http://localhost:9292/goals/${goal.id}`, {
            method: "DELETE",    
        })
        .then(data => {
            deleteGoal(goal)
        })
  }

  return (
        <div className='bg-white p-4 rounded-lg max-w-md'>
          {goal.goal} {goal.rider? <em>({goal.rider.name})</em> :null}
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold  py-2 px-4 rounded  mx-4' onClick={handleDelete}>Delete</button>
      </div>
  )
}

export default Goal;
