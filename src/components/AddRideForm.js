import {useState, useEffect} from "react";
import styled from 'styled-components';


function AddRideForm() {

    const [newRide, setNewRide] = useState({
        name: "Alessandra",
        date: '',
        description: '',
        route: 'East Orchard Loop'
    })

    const [routes, setRoutes] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/routes')
        .then(r => r.json())
        .then(data => {
            setRoutes(data)
        })
    }, [])

    const routeArr = routes.map(r => r.title)

    function handleChange(e) {
        setNewRide({...newRide,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(newRide)
    }

    return(
        <>
            <h1>Add Ride</h1>
            
            <Form>
                
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <select name="name" value={newRide.name} onChange={handleChange}>
                            <option value="Alessandra">Alessandra</option>
                            <option value="Patrick">Patrick</option>
                        </select>
                    </label>

                    <label>
                        Route:
                        <select name="route" value={newRide.route} onChange={handleChange}>
                            {routeArr.map(route => {
                                return <option key={route}>{route}</option>
                            })}
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label>
                        Title:
                        <input type="text" name="title" value={newRide.title} onChange={handleChange}/>
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
            
        </>
    )
}

export default AddRideForm;

const Form = styled.div`
    display: flex;
    margin: auto;
    box-shadow: 4px 4px 8px 10px rgba(0,0,0,0.3);
    width: 600px;
    input {
        padding: 5px;
        margin: 5px;
    }
    label {
        margin-left: 10px;
    } 
    margin-top: 50px;
` 

