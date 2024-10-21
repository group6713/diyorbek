import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const NavbarContainer = ()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarContainer;