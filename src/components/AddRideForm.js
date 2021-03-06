import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function AddRideForm( {onAddRide, riders} ) {
    
    const [newRide, setNewRide] = useState({
        name: '',
        date: '',
        description: '',
        rider_id: '',
        route_id: '',
    })

    let navigate = useNavigate()

    const [routes, setRoutes] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/routes')
        .then(r => r.json())
        .then(data => {
            setRoutes(data)
        })
    }, [])

    function handleChange(e) {
            setNewRide({...newRide,
                [e.target.name]: e.target.value
            })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/bike_rides", {
            method: "POST",    
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRide)
        })
        .then(r => r.json())
        .then(data => {
            onAddRide(data)
            navigate('/riders')
        })
    }

    return(
        <div className = "rounded-lg  py-4 shadow-xl ">
            <h1 className="bg-green-700 text-6xl py-4 text-center">Add Ride</h1>
            <div className='bg-green-500 py-6 px-60 flex'>

                <form onSubmit={handleSubmit} className='bg-white shadow-2xl rounded-lg p-14 pt-6 pb-8'>
                    <label className='py-4 placeholder-gray-500 font-bold focus:border-green-700'>
                        Name:
                        <select className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 focus:border-green-700' name="rider_id" onChange={handleChange} >
                            <option value="" hidden>Select...</option>
                            {riders.map(rider => <option key={rider.id} value={rider.id} >{rider.name}</option>)}
                        </select>
                    </label>

                    <label className='py-4 font-bold focus:border-green-700'>
                        Route:
                        <select className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' name="route_id" onChange={handleChange}>
                            <option value="" hidden>Select...</option>
                            {routes.map(route => <option key={route.id} value={route.id}>{route.title}</option>)}
                        </select>
                    </label>

                    <label className='outline-none placeholder-gray-500 font-bold focus:border-green-700'>
                        Title:
                        <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' type="text" name="name" value={newRide.name} onChange={handleChange}/>
                    </label>

                    <label className='outline-none placeholder-gray-500 font-bold focus:border-green-700'>
                        Date:
                        <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' type="text" name="date" value={newRide.date} onChange={handleChange}/>
                    </label>

                    <label className='outline-none placeholder-gray-500 font-bold focus:border-green-700'>
                        Description:
                        <input className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' type="text" name="description" value={newRide.description} onChange={handleChange}/>
                    </label>

                    <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 shadow border-b-2 rounded border-green-500' type="submit" value="Add" />
                </form>
            </div>
            
        </div>
    )
}

export default AddRideForm;


