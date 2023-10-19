// import React, { useEffect, useState } from 'react';
// import './search.scss';
// import axios from 'axios';


// export default function SearchForm() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/search')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // Render the user data as a list
//   const renderUserData = () => {
//     return data.map((user) => (
//       <div key={user.userId} className="user-card">
//         <h2>{user.userName}</h2>
//         <p>Requested Date: {user.RequestedDate}</p> 
//         <p>Requested Time: {user.RequestedTime}</p>
//         <p>WAID: {user.WAID}</p>
//         <p>language:{user.Language}</p>

//       </div>
//     ));
//   };

//   return (
//     <div className="container">
//       <div>
//       <label htmlFor="fromDate">From Date: </label><br/>
//       <input type='date' className='fromDate'/>
//       </div>
//       <div>
//       <label htmlFor="toDate">To Date: </label><br/>
//       <input type='date' className='toDate'/>
//       </div>
//       <input type='text' placeholder='Enter WAID' className='search'/>
//       <h1>User Data</h1>
//       {renderUserData()}
//     </div>
//   );
// }
 import './search.scss' 
 import { useEffect, useState } from 'react';
 import axios from 'axios'
import Table from './Table';



function SearchForm(){
  const [query,setQuery]=useState("")
  const [data,setData]=useState([])



  useEffect(()=>{
    const fetchUsers = async ()=>{
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);

    };
    fetchUsers()
  },[query])


  return(
    <div className="app">
      <input 
      type="text" 
      placeholder="Search" className="search" 
      onChange={(e)=>setQuery(e.target.value)} /><br/>
      <input type='date' className='date' id="d1"></input>
      <input type='date' className='date' id="d2"></input>
      <Table data={data}/>
    </div>
  )
}

export default SearchForm