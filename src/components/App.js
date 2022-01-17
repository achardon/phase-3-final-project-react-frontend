import '../App.css';
import Header from "./Header";
import Riders from './Riders';
import {useState, useEffect} from "react";
import { Route, Routes, Switch, useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from './NavBar';
import AddRideForm from './AddRideForm';

function App() {

  const [bikeRides, setBikeRides] = useState([])
    
  useEffect(() => {
      fetch('http://localhost:9292/bike_rides')
      .then(r => r.json())
      .then(data => {
          setBikeRides(data)
      })
  }, [])

  console.log(bikeRides)

  function AddRide(newRide) {
    console.log('adding new ride in App')
    console.log(newRide)
    //need to add ride to database here...
    //may be a good time to watch lecture on posting with Sinatra
    //create new route in application_controller (backend) in order to post to "/bike_rides" 
    //send post request to "http://localhost:9292/bike_rides" with newRide info
    //update bikeRides in this component

    
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="riders" element={<Riders />} />
        <Route path="add_ride" element={<AddRideForm onAddRide={AddRide}/>} />
       
      </Routes>
    </div>
  );
}

export default App;



