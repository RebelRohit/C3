import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import "./Userdrop.css"
import { useNavigate } from 'react-router-dom';
import "./TableDisplay"

function Userdrop({ setIsLoggedIn}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="dropdown" 
    onMouseEnter={()=> setDropdownOpen(true)}
      onMouseLeave={()=> setDropdownOpen(false)}
    >
      <FaUserCircle onClick={toggleDropdown} className="user-icon"/>
      {dropdownOpen && (
        <div className="dropdown-menu">
        <h6>Hello Admin</h6><hr/>
          <a>Profile</a>
          <a>Settings</a>
          <a onClick={handleLogout}>Logout</a>
        </div>
      )}
    </div>
  );
}

export default Userdrop;