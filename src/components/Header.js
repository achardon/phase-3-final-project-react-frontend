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

    console.log(message)
    const text = message.message

    return (
        <div>
            {text}
        </div>
    )
}

export default Header;