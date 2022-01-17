import '../App.css';
import Header from "./Header";
import Riders from './Riders';
import {useState} from "react";
import { Route, Routes, Switch, useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from './NavBar';
import AddRideForm from './AddRideForm';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="riders" element={<Riders />} />
        <Route path="add_ride" element={<AddRideForm />} />
      </Routes>
    </div>
  );
}

export default App;



