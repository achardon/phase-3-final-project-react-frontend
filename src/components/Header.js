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

    // console.log(message)
    const text = message.message

    return (
      <header className="App-header">
        <h1>Bike Ride Tracker</h1>
        <p style={{fontSize: 16}}>
            {text}
        </p>
        <img src='https://www.outsideonline.com/wp-content/uploads/2020/11/19/cyclist-lens-flare_h.jpg' alt='biker' height='550'/>
        
      </header>
    )
}

export default Header;