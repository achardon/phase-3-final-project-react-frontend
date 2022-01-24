import React from 'react';

function Goal( {goal, deleteGoal} ) {

  function handleDelete() {
    fetch(`http://localhost:9292/goals/${goal.id}`, {
            method: "DELETE",    
        })
        deleteGoal(goal)
        // .then(r => r.json())
        // .then(data => {
        //     deleteGoal(goal)
        //     // alert('Success!')
        // })
  }

  return (
        <div className='bg-white p-4 rounded-lg max-w-sm'>
          {goal.goal}
          ({goal.rider_id})
          {console.log(goal.rider_name)} //this is undefined, even though the model Goal has an instance method called rider_name
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mx-1' onClick={handleDelete}>Delete</button>
      </div>
  )
}

export default Goal;
