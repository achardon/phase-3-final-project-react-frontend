import React from 'react';

function Goal( {goal} ) {

  return (
      <div className="bg-green-300 p-4 max-w-sm rounded-lg">
          {goal.goal}
          ({goal.rider_id})
      </div>
  )
}

export default Goal;
