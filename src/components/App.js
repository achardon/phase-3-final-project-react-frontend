import '../App.css';
import Header from "./Header";
import BikeRides from './BikeRides';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bike Ride Tracker
        </p>
        <Header />
        
      </header>
      <BikeRides />
    </div>
  );
}

export default App;
