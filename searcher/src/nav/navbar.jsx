import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.scss';
import '../homepage/home';
import '../login/login';
import LoginCard from '../login/login';
import HomeScreen from '../homepage/home';
import SearchForm from '../searchbar/search';

function Navigation() {
  return (
    <Router>
      <Navbar className='Navbar'>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://in1-cpaas.ozonetel.com/templates/beez3/images/logosmall_ozo.png"
            alt="Ozonetel Logo"
            width="auto"
            height="auto"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to='/home' className='elements' id='Home'>Home</Nav.Link>
          <Nav.Link as={Link} to='/login' className='elements' id='Login'>Login</Nav.Link>
          <Nav.Link as={Link} to='/search' className='elements' id='Search'>Search</Nav.Link>
          <Nav.Link className='elements' id='Aboutus' href="https://ozonetel.com/about-us/">About Us</Nav.Link>

        </Nav>
      </Navbar>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/login" element={<LoginCard />} />
          <Route path="/search" element={<SearchForm />} />
          
      </Routes>
    </Router>
  );
}

export default Navigation;
