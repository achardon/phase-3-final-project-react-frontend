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
      <header className = "rounded-lg px-60 py-4 ring-1 ring-slate-900/5 shadow-xl">
        <h1 className="bg-amber-500 text-6xl">Bike Ride Tracker</h1>
        <p style={{fontSize: 16}}>
            {text}
        </p>
        <img src='https://www.outsideonline.com/wp-content/uploads/2020/11/19/cyclist-lens-flare_h.jpg' alt='biker' height='550'/>
        
      </header>
    )
}

export default Header;