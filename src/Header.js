import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';



function Header(){

    return (    
<nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item">
        <Link to="/WelcomePage" className="nav-Link" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/About" href="/" className="nav-Link" href="#">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/Services" className="nav-Link" href="#">Services</Link>
      </li>
      <li className="nav-item">
        <Link to="/ContactUs" className="nav-Link" href="#">Contact Us</Link>
      </li>      
      <li className="nav-item">
          <Link to="/RegistrationForm" className="nav-Link" href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
        </li>
      <li className="nav-item">
          </li>
    </ul>
  </div>

</nav>


    );

};

export default Header;