import '../App.css';
import {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Header from "./Header";
import Riders from './Riders';
import AddRideForm from './AddRideForm';
import Goals from './Goals';

function App() {

  const [riders, setRiders] = useState([])
  const [bikeRides, setBikeRides] = useState([])
  const [routes, setRoutes] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/routes')
      .then(r => r.json())
      .then(data => {
          setRoutes(data)
      })
  }, [])
    
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
  }, [])

  function addRide(newRide) {
    const route = routes.find(route => route.id === newRide.route_id)
    const rideWithRoute = {...newRide, route: route}
    setBikeRides([...bikeRides, rideWithRoute])
  }

  function deleteRide(rideID) {
    const updatedRides = bikeRides.filter(ride => ride.id !== rideID)
    setBikeRides(updatedRides)
  }

  function updateRide(ride) {
    const updatedRides = bikeRides.map(r => {
      if (r.id === ride.id) {
        return ride
      }
      else {
        return r
      }
    })
    setBikeRides(updatedRides)
  }

  function addRider(rider) {
    setRiders([...riders, rider])
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="riders" element={<Riders onDelete={deleteRide} bikeRides={bikeRides} riders={riders} onUpdate={updateRide} addRider={addRider}/>} />
        <Route path="add_ride" element={<AddRideForm onAddRide={addRide} riders={riders}/>} />
        <Route path="goals" element={<Goals riders={riders}/>} />
      </Routes>
    </div>
  );
}

export default App;

