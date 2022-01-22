import React from 'react';

function Goal( {goal} ) {

  return (
      <div className="bg-green-300 p-4 max-w-sm rounded-lg">
          {goal.goal}
          ({goal.rider_id})
          {console.log(goal.rider_name)} //this is undefined, even though the model Goal has an instance method called rider_name
      </div>
  )
}

export default Goal;
