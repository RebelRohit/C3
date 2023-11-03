import React, { useState, useEffect } from 'react';
import {Tabe,Tabes} from './TableServer';
import './TableDisplay.css'
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import {Tab,Nav,Navbar,Container,Button} from 'react-bootstrap';
import Userdrop from './Userdrop';

function Tag({setIsLoggedIn}) {
  const [data1, setData1] = useState([]); 
  const [data2, setData2] = useState([]); 
  const [startDate, setStartDate] = useState(''); 
  const [endDate, setEndDate] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [filteredData1, setFilteredData1] = useState(data1);
  const [filteredData2, setFilteredData2] = useState(data2);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:5005/INB'),
      fetch('http://localhost:5005/OTB') // replace with your second endpoint
    ])
    .then(async([res1, res2]) => {
      const data1 = await res1.json();
      const data2 = await res2.json();
      // set state here
      setData1(data1);
      setData2(data2);
      setFilteredData1(data1);
      setFilteredData2(data2);
    })
    .catch(err => console.log('Error: ', err));
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
    let filteredData1 = filterDataByDateAndNumber(data1, startDate, endDate, whatsAppNumber);
    let filteredData2 = filterDataByDateAndNumber(data2, startDate, endDate, whatsAppNumber);

    filteredData1.sort((a, b) => {
      const dateA = new Date(a.RequestedDate);
      const dateB = new Date(b.RequestedDate);

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    filteredData2.sort((a, b) => {
      const dateA = new Date(a.RequestedDate);
      const dateB = new Date(b.RequestedDate);

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredData1(filteredData1);
    setFilteredData2(filteredData2);
  }

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setWhatsAppNumber('');
    setFilteredData1(data1);
    setFilteredData2(data2);
  }

  // Rest of your component
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
            onChange={e => setWhatsAppNumber(e.target.value)} 
  onKeyDown={e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }} className='waid' autoComplete='on'/>
            <button className='sb' onClick={handleSearch} >
            <BsSearch className='sear'/></button>
            </div>
            <Button onClick={handleReset} className='element' id='resers' >Reset</Button>
            <Navbar.Text className='label' id='label4'>Sort By</Navbar.Text>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className='sortOrder'>
            <option value="asc">Latest date last</option>
            <option value="desc">Latest date first</option>
            </select>
            <Userdrop setIsLoggedIn={setIsLoggedIn} className='icon1'/>

          </Nav>
        </Container>
      </Navbar>
  <Tab.Container className='az' defaultActiveKey="first">
    <div className="d-flex">
        <Nav variant="pills" className="flex-column">
            <Nav.Item>
                <Nav.Link eventKey="first">Inbound Request</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second" >Meta Callback</Nav.Link>
            </Nav.Item>
        </Nav>
        <Tab.Content>
            <Tab.Pane eventKey="first">
                <Tabe data={filteredData1} />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <Tabes data={filteredData2} />
            </Tab.Pane>
        </Tab.Content>
    </div>
</Tab.Container>

</div>

  );
}



export default Tag;