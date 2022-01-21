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

    //how do I get the image to be centered?

    return (
      <header className = "rounded-lg py-4 place-content-center">
        <h1 className="bg-green-700 text-6xl p-8 text-center">Bike Ride Tracker</h1>
        <p className="bg-green-500 text-2xl p-4 text-center">
            {text}
        </p>
        <img src='https://images.immediate.co.uk/production/volatile/sites/21/2020/07/Liv-Avail-Advanced-Pro-2-07-7f0712d.jpg?webp=true&quality=45&resize=1240%2C826' alt='biker' height='550' class="place-content-center"/>
        
      </header>
    )
}

export default Header;