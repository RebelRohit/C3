import React, { useState } from 'react';
import './login.scss'; 
import credentials from '../credentials.json'; 

export default function LoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate a basic login check
  const handleLogin = () => {
    if (username === credentials.username && password === credentials.password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login</h5><hr></hr>
          {isLoggedIn ? (
            <p>You are logged in!</p>
          ) : (
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
                />
              </div>
              <button
                type="button"
                className="btn btn-custom" id ="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
