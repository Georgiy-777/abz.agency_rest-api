import React from 'react';
// import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/Cat.png"
import './navbar.css'
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__logoblock">
                        <img src={Logo}/>
                        <span className="logotype">TESTTASK</span>
                    </div>
                    <div className="navbar__btnblock">
                        <button className="myBtn" style={{marginRight: '10px'}}>Users</button>
                        <button className="myBtn">Sign up</button>
                    </div>
                   

                </div>
 

 
            </div>

        </nav>
    );
};

export default NavBar;
