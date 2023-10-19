import React, { useState, useEffect } from 'react';
import Tabs from './TableServer'; 
import './TableDisplay.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function Appp() {
  const [data, setData] = useState([]); 
  const [startDate, setStartDate] = useState(''); 
  const [endDate, setEndDate] = useState('');
  const [WAID, setWAID] = useState(''); 
  const [filteredData, setFilteredData] = useState(data);




  // Use useEffect to fetch data from the server (you can customize this part)
  useEffect(() => {
    // Replace this with your actual server data fetch
    fetch('http://localhost:5005/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Update filteredData with fetched data
      });
  }, []);


  function filterDataByDate(data, startDate, endDate) {
    // Convert startDate and endDate to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Filter data
    const filteredData = data.filter(item => {
      // Convert item dates to Date objects
      const requestedDate = new Date(item.requested_date);
      const sendDate = new Date(item.send_date);
  
      // Check if requestedDate is after or on startDate and sendDate is before or on endDate
      return requestedDate >= start && sendDate <= end;
    });
  
    return filteredData;
  } // Function to handle search
  const handleSearch = () => {
    const filteredData = filterDataByDate(data, startDate, endDate);
    setFilteredData(filteredData);
  }

  // Function to handle reset
  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    //setWAID('');
    setFilteredData(data);
  }

  return (
    <div className="container">
        <Navbar style={{alignItems:"center", alignContent:"center",position:"sticky",top:0}}>
        <Container>
          <Nav className="me-auto">
            <Navbar.Text className='label'> Start Date</Navbar.Text>
            <input type="date" 
                value={startDate} 
                 onChange={e => setStartDate(e.target.value)} className='fromdate'/>
            <Navbar.Text className='label'>End Date</Navbar.Text>
            <input type="date" 
            value={endDate} 
            onChange={e => setEndDate(e.target.value)} className='todate'/>
            <Navbar.Text className='label'>Search</Navbar.Text>
            <input 
            type="number" 
            placeholder="WAID..." 
            value={WAID} 
            onChange={e => setWAID(e.target.value)} className='waid'/>
            {/* <button onClick={handleSearch} className='elements' variant='primary'>Search</button>
            <button onClick={handleReset} className='elements' variant='primary'>Reset</button>  */}
            <Button onClick={handleSearch} className='elements'variant="success">Search</Button>
            <Button onClick={handleReset} className='elements' variant="danger">Reset</Button>
          </Nav>
        </Container>
      </Navbar>
      <Tabs data={filteredData} /> {/* Pass filtered data to the TableComponent */}
    </div>
  );
}

export default Appp;