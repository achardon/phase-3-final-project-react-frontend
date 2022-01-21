import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {useState} from "react";

const linkStyles = {
    display: "inline-block",
    padding: 15,
  };
  
  function NavBar() {
  
    const [width, setWidth] = useState(window.innerWidth)
  
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  
    return (
      <div className = "rounded-lg px-60 py-4 ring-1 ring-slate-900/5 shadow-xl" style={{width: width}}>
        <NavLink to="/" style={linkStyles}>Home</NavLink>
        <NavLink to="/riders" style={linkStyles}>Riders</NavLink>
        <NavLink to="/add_ride" style={linkStyles}>Add Ride</NavLink>

      </div>
    );
  }
  
  export default NavBar;
  
  // const Bar = styled.div`
  //   text-align: center;
  //   padding: 20px;
  //   background: orange;
  // `;
  