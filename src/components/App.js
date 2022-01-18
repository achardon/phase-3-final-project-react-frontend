import '../App.css';
import {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from './NavBar';
import Header from "./Header";
import Riders from './Riders';
import AddRideForm from './AddRideForm';

function App() {

  const [riders, setRiders] = useState([])
  const [bikeRides, setBikeRides] = useState([])
    
  useEffect(() => {
      fetch('http://localhost:9292/bike_rides')
      .then(r => r.json())
      .then(data => {
          setBikeRides(data)
      })
  }, [])

  useEffect(() => {
      fetch('http://localhost:9292/riders')
      .then(r => r.json())
      .then(data => {
          setRiders(data)
      })
  }, [bikeRides])

  function addRide(newRide) {
    setBikeRides([...bikeRides, newRide])
  }

  function deleteRide(rideID) {
    const updatedRides = bikeRides.filter(ride => ride.id !== rideID)
    setBikeRides(updatedRides)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="riders" element={<Riders onDelete={deleteRide} riders={riders}/>} />
        <Route path="add_ride" element={<AddRideForm onAddRide={addRide} riders={riders}/>} />
      </Routes>
    </div>
  );
}

export default App;



