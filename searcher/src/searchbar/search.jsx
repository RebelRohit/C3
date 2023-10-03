import React, { useEffect, useState } from 'react';
import './search.scss';
import axios from 'axios';


export default function SearchForm() {
  const[data, setData] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])
  return(
    <div className=''container>
      <div className='mt-3'>
        <h3>User data</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>

            </tr>
          </thead>
          <tbody>{
            data.map((user, index)=>{
              return <tr key={index}>

                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>

            })


            }

          </tbody>
        </table>


      </div>
      
    </div>

  )
  
  
}
