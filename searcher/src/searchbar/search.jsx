import React, { useEffect, useState } from 'react';
import './search.scss';
import axios from 'axios';

export default function SearchForm() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/search')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Render the user data as a list
  const renderUserData = () => {
    return data.map((user) => (
      <div key={user.userId} className="user-card">
        <h2>{user.userName}</h2>
        <p>Requested Date: {user.RequestedDate}</p>
        <p>Requested Time: {user.RequestedTime}</p>
        {/* Add more user properties as needed */}
      </div>
    ));
  };

  return (
    <div className="container">
      <h1>User Data</h1>
      {renderUserData()}
    </div>
  );
}
