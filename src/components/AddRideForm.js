import {useState, useEffect} from "react";
import styled from 'styled-components';

function AddRideForm( {onAddRide, riders} ) {
    
    const [newRide, setNewRide] = useState({
        name: '',
        date: '',
        description: '',
        rider_id: '',
        route_id: ''
    })

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
            alert('Success!')
        })
    }

    return(
        <Page>
            <h1 style={{color: 'white', padding: 30}}>Add Ride</h1>
            <Form>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <select name="rider_id" onChange={handleChange} >
                            <option value="none">Select Rider</option>
                            {riders.map(rider => <option key={rider.id} value={rider.id} >{rider.name}</option>)}
                        </select>
                    </label>

                    <label>
                        Route:
                        <select name="route_id" onChange={handleChange}>
                            <option value="none">Select Route</option>
                            {routes.map(route => <option key={route.id} value={route.id}>{route.title}</option>)}
                            <option >Other</option>
                        </select>
                    </label>

                    <label>
                        Title:
                        <input type="text" name="name" value={newRide.name} onChange={handleChange}/>
                    </label>

                    <label>
                        Date:
                        <input type="text" name="date" value={newRide.date} onChange={handleChange}/>
                    </label>

                    <label>
                        Description:
                        <input type="text" name="description" value={newRide.description} onChange={handleChange}/>
                    </label>

                    <input type="submit" value="Add" />
                </form>
            </Form >
            
        </Page>
    )
}

export default AddRideForm;

const Form = styled.div`
    // display: flex;
    margin: auto;
    box-shadow: 4px 4px 5px 20px rgba(255,165,0,0.3);
    width: 600px;
    input {
        padding: 5px;
        margin: 5px;
    }
    label {
        margin-left: 10px;
    } 
    margin-top: 50px;
    background-color: white;
    
` 
const Page = styled.div`
    background-color: #282c34;
    height: 800px;
    margin-top: 0px;

`

