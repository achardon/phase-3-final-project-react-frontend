import '../App.css';
import Header from "./Header";
import Riders from './Riders';
import {useState} from "react";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bike Ride Tracker
        </p>
        {/* <Header /> */}
        
      </header>
      <Riders />
    </div>
  );
}

export default App;

