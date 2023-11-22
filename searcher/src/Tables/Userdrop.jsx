import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./Userdrop.css"

function Userdrop({ setIsLoggedIn}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const node = useRef();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsLoggedIn(false); 
    navigate('/login'); 
  };


  return (
    <div className="dropdown" ref={node}>
      <FaUserCircle onClick={toggleDropdown} className="user-icon"/>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <h6 style={{textAlign:"center"}}>Hello Admin</h6><hr/>
          <div className="dropdown-item">
            <FaUser className="dropdown-icon" />
            <a>Profile</a>
          </div>
          <div className="dropdown-item">
            <FaCog className="dropdown-icon" />
            <a>Settings</a>
          </div>
          <div className="dropdown-item">
            <FaSignOutAlt className="dropdown-icon" />
            <a  onClick={handleLogout}>Logout</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userdrop;