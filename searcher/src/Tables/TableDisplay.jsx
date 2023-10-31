import React, { useState, useEffect } from 'react';
import Tabe from './TableServer'; 
import './TableDisplay.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import App from '../App';
// import { FaUserCircle,FaUser,FiLogOut } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import {Tabs,Tab} from 'react-bootstrap';
import Userdrop from './Userdrop';

function Appp({setIsLoggedIn}) {
  const [data, setData] = useState([]); 
  const [startDate, setStartDate] = useState(''); 
  const [endDate, setEndDate] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  useEffect(() => {
    fetch('http://localhost:5005/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); 
      });
  }, []);

  function filterDataByDateAndNumber(data, startDate, endDate, whatsAppNumber) {
    // Convert startDate and endDate to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Filter data
    const filteredData = data.filter(item => {
      // Convert item dates to Date objects
      const requestedDate = new Date(item.RequestedDate);
      const sendDate = new Date(item.SendDate);

      // Check if requestedDate is after or on startDate and sendDate is before or on endDate
      const isWithinDateRange = requestedDate >= start && sendDate <= end;

      // Check if the WhatsApp number matches
      const hasMatchingNumber = item.WAID === whatsAppNumber;

      return isWithinDateRange && hasMatchingNumber;
    });

    return filteredData;
  }

  const handleSearch = () => {
    let filteredData = filterDataByDateAndNumber(data, startDate, endDate, whatsAppNumber);

    filteredData.sort((a, b) => {
      const dateA = new Date(a.RequestedDate);
      const dateB = new Date(b.RequestedDate);
  
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  
    setFilteredData(filteredData);
  }


  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setWhatsAppNumber('');
    setFilteredData(data);
  }
  return (
    <div className="container">
        <Navbar bg='dark' data-bs-theme="light" className='navbar-custom custom-navbar'>
        <Container>
          <Nav className="me-auto">
            <div className='date-container'>
            <Navbar.Text className='label' id='label1'> Start Date</Navbar.Text>
            <input type="date" 
                value={startDate} 
                onChange={e => setStartDate(e.target.value)} className='fromdate'/>
            <Navbar.Text className='label' id='label2'>End Date</Navbar.Text>
            <input type="date" 
            value={endDate} 
            onChange={e => setEndDate(e.target.value)} className='todate'/>
            </div>
           {/* <Navbar.Text className='label' id='label3'>Search</Navbar.Text> */}
           <div className='search-container'>
            <input 
            type=""
            placeholder="Enter WAID" 
            value={whatsAppNumber} 
            onChange={e => setWhatsAppNumber(e.target.value)} className='waid' />
            <button className='sb' onClick={handleSearch}>
            <BsSearch className='sear'/></button>
            </div>
            <Button onClick={handleReset} className='element' id='resers' >Reset</Button>
            <Navbar.Text className='label' id='label4'>Sort By</Navbar.Text>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className='sortOrder'>
            <option value="asc">Latest date last</option>
            <option value="desc">Latest date first</option>
            </select>
            {/* <div className='logout'>
            <OverlayTrigger
              placement="bottom"
               overlay={
              <Tooltip id="logout-tooltip">
              Logout
              </Tooltip>
              }>
                <button className='logoutz'> 
                  <FiLogOut className='icon' onClick={handleLogout}/>
                </button>
           </OverlayTrigger>
            </div> */}
            <Userdrop setIsLoggedIn={setIsLoggedIn} className='icon1'/>
            {/* <Button onClick={handleLogout} id='logout' variant='outline-danger'>Logout</Button> */}
                        
            
            
            

          </Nav>
        </Container>
      </Navbar>
      <div className='tabs'>
       <Tabs defaultActiveKey="table1" transition={true} id="fill-tab-example">
        <Tab eventKey="table1"  title="Inbound Request">
      <Tabe data={filteredData} />
    </Tab>
    <Tab eventKey="table2"  transition={true} title="Outbound Request" id="fill-tab-example">
      <Tabe data={filteredData} />
    </Tab>
  </Tabs>
  </div>
</div>

  );
}

export default Appp;