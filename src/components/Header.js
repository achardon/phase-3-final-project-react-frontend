import {useState, useEffect} from "react";

function Header() {

    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/')
        .then(r => r.json())
        .then(data => {
            setMessage(data)
        })
    }, []);

    const text = message.message

    return (
      <header className = "bg-blue-300 rounded-lg py-4 grid justify-items-stretch">
        <h1 className="bg-green-700 text-6xl p-8 text-center">Bike Ride Tracker</h1>
        <p className="bg-green-500 text-2xl p-4 text-center">
            {text}
        </p>
        <div className="justify-self-center"> 
          <img src='https://images.immediate.co.uk/production/volatile/sites/21/2020/07/Liv-Avail-Advanced-Pro-2-07-7f0712d.jpg?webp=true' alt='biker'/>
        </div>
        
      </header>
    )
}

export default Header;