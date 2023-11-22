import React, { useState } from 'react';
import './login.scss';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'

export default function LoginCard({ setIsLoggedIn }) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    axios.defaults.baseURL = 'http://localhost:8000/login';
  
    try {
      const response = await axios.post('/', {
        userName,password
      },{ withCredentials: true });
      const token = response.data.token;
      localStorage.setItem('token', token); // Changed 'isLoggedIn' to 'token'
      setIsLoggedIn(true);
      navigate('/search');
    } catch (error) {
      alert('Invalid userID or Password');
    }
  };
  
  useEffect(() => {
    const token = localStorage.getItem('token'); // Changed 'isLoggedIn' to 'token'
    if (token) {
      setIsLoggedIn(true);
      navigate('/search');
    }
    setIsLoading(false);
  }, []);
  
  if (isLoading) {
    return <div><span>Loading...</span></div>;
  }
  
    
  

  return (
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
                required={true}
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete = "off"
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
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown ={(e)=>{
                  if(e.key === 'Enter'){
                    handleLogin(e)
                  // autoComplete = "off"

                  }
                }}
                autoComplete = "off"
              />
            </div>
            <button type="button" className="btn btn-custom" id="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
