import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.scss';
import '../login/login'
import 'react-router-dom'
// import Home from './Home';

export default function Navigation() {
  return (
    <>
    
    <Navbar className='Navbar'>

  <Navbar.Brand href="/home" id="logo"><img
              src="https://in1-cpaas.ozonetel.com/templates/beez3/images/logosmall_ozo.png" // Replace with the actual path to your image
              alt="Ozonetel Logo"    // Alt text for accessibility
              width="auto"             // Set the width of the image
              height="auto"          // Maintain aspect ratio
            /></Navbar.Brand>
   <Nav className="ms-auto">
            <Nav.Link className='elements' id='Home' href="/">Home</Nav.Link>
            <Nav.Link className='elements' id='Login' href="/login">Login</Nav.Link>
            <Nav.Link className='elements' id='Aboutus' href="https://ozonetel.com/about-us/">About Us</Nav.Link>
          </Nav>
     
      </Navbar>
      
    </>
  );
}

