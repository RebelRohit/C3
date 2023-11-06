import React, { useEffect, useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import credentials from '../credentials.json';


export default function LoginCard({setIsLoggedIn}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  

  const handleLogin = () => {
    if (username === credentials.userID && password === credentials.Password) {
      setIsLoggedIn(true);
      navigate("/search");
    } else {
      alert('Invalid username or password');
    }
  };

  
  return (
    <>
    
    <div className="login-card">
      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <hr />
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin();
                  }}} />
            </div>
            <button
              type="button"
              className="btn btn-custom"
              id="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
