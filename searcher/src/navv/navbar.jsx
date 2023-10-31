import React from 'react';
import { NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.scss';
import '../login/login';
// import LoginCard from '../login/login';
// import Home from '../homepage/home'
// import SearchForm from '../searchbar/search';

export default function Navigation({isLoggedIn}) {
  return isLoggedIn ? null:(
      <Navbar className='Navbar'>
        <NavLink to="/">
          <img
            src="https://in1-cpaas.ozonetel.com/templates/beez3/images/logosmall_ozo.png"
            alt="Ozonetel Logo"
            width="auto"
            height="auto"
          />
        </NavLink>
        <Nav className="ms-auto">
          <NavLink to='/' className='elements' id='Home'>Home</NavLink>
          <NavLink  to='login' className='elements' id='Login'>Login</NavLink>
          <NavLink to='search' className='elements' id='Search'>Search</NavLink>
          <NavLink className='elements' href="*" disabled>About Us</NavLink>

        </Nav>
      </Navbar>
     
    
  );
}


