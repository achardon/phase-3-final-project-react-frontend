import {useState, useEffect} from "react";
import styled from 'styled-components';


function AddRideForm() {

    const [newRide, setNewRide] = useState([])
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/routes')
        .then(r => r.json())
        .then(data => {
            setRoutes(data)
        })
    }, [])

    const routeArr = routes.map(r => r.title)

    console.log(routeArr)

    return(
        <Form>
            <h1>Add Ride</h1>
            <form>
                <label>
                    Name:
                    <select>
                        <option value="Alessandra">Alessandra</option>
                        <option value="Patrick">Patrick</option>
                    </select>
                </label>

                <label>
                    Route:
                    <select>
                        {routeArr.map(route => {
                            return <option key={route} value="route">{route}</option>
                        })}
                        <option value="other">Other</option>
                    </select>
                </label>

                <label>
                    Title:
                    <input type="text" name="title" />
                </label>

                <label>
                    Date:
                    <input type="text" name="date" />
                </label>

                <label>
                    Description:
                    <input type="text" name="description" />
                </label>

                <input type="submit" value="Add" />
            </form>
        </Form >
    )
}

export default AddRideForm;

const Form = styled.div`
    margin: auto;
    box-shadow: 4px 4px 8px 10px rgba(0,0,0,0.3);
    width: 650px;
    input {
        padding: 5px;
        margin: 5px;
    }
    label {
        margin-left: 10px;
    } 
    margin-top: 50px;
` 

