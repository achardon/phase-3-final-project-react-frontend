import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function AddRideForm( {onAddRide, riders} ) {
    

    //there is a method you can use on the backend (in the controller) called .find_or_create_by, which either finds the id or creates a new id; for example, 
    //@author = Author.find_or_create_by(name: params[:author][:name])

    const [newRide, setNewRide] = useState({
        name: '',
        date: '',
        description: '',
        rider_id: '',
        route_id: ''
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

    //Need to trouble shoot submitting new ride and making sure all data (especially route info) is included

    function handleSubmit(e) {
        e.preventDefault();
        //adding ride to database here
        fetch("http://localhost:9292/bike_rides", {
            method: "POST",    
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRide)
        })
        .then(r => r.json())
        .then(data => {
            onAddRide(newRide)
            // alert('Success!')
            navigate('/riders')
        })
    }

    return(
        // <div className='bg-blue-300 py-6 flex items-center justify-center'>
        <div className = "rounded-lg  py-4 shadow-xl ">
            <h1 className="bg-green-700 text-6xl py-4 text-center">Add Ride</h1>
            {/* <div className="bg-stone-600"> */}
            {/* <div className = "rounded-lg px-60 py-4 ring-1 ring-slate-900/5 shadow-xl"> */}
            <div className='bg-green-500 py-6 px-40 flex items-center justify-center'>

                <form onSubmit={handleSubmit} className='bg-white shadow-2xl rounded-lg p-14 pt-6 pb-8 m-4 md:items-center'>
                    <label className='py-4 outline-none placeholder-gray-500 font-bold focus:border-green-700'>
                        Name:
                        <select className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' name="rider_id" onChange={handleChange} >
                            <option value="none">Select Rider</option>
                            {riders.map(rider => <option key={rider.id} value={rider.id} >{rider.name}</option>)}
                        </select>
                    </label>

                    <label className='py-4 outline-none placeholder-gray-500 font-bold focus:border-green-700 placeholder-gray-500 leading-tight focus:border-green-700'>
                        Route:
                        <select className='w-full px-4 py-2 shadow border-b-2 rounded border-green-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-green-700' name="route_id" onChange={handleChange}>
                            <option value="none">Select Route</option>
                            {routes.map(route => <option key={route.id} value={route.id}>{route.title}</option>)}
                            <option >Other</option>
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

//stretch goals
//distance, time out, average speed, other riders

// const Form = styled.div`
//     // display: flex;
//     margin: auto;
//     box-shadow: 4px 4px 5px 20px rgba(255,165,0,0.3);
//     width: 600px;
//     input {
//         padding: 5px;
//         margin: 5px;
//     }
//     label {
//         margin-left: 10px;
//     } 
//     margin-top: 50px;
//     background-color: white;
    
// ` 
// const Page = styled.div`
//     background-color: #282c34;
//     height: 800px;
//     margin-top: 0px;

// `

