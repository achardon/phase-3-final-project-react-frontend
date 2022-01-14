import {useState, useEffect} from "react";
import styled from "styled-components";
import BikeRides from "./BikeRides";

function Riders() {

    const [riders, setRiders] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/riders')
        .then(r => r.json())
        .then(data => {
            setRiders(data)
        })
    }, [])

    // riders.map(rider => console.log(rider.name))

    return(
        <div>
            {riders.map(rider => {
                return <BikeRides key={rider.id} name={rider.name} />
                }
            )}
        </div>
    )
}

export default Riders;