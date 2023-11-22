// TableComponent.js
import React ,{useState}from 'react';
import ReactPaginate from 'react-paginate';
// import './Tabu.css'
import './TableSer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export  const Tabe = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage =10;
    const pageCount = Math.ceil(data.length/itemsPerPage);


    const offset = currentPage*itemsPerPage;
    const currentPageData = data.slice(offset,offset +itemsPerPage);
  return (
    <>
    <div className='table-container'>
    <table className="custom-table">
      <thead style={{ position: 'sticky', top: '60px', background: 'black' }}>
        <tr>
          <th>Seq ID</th>
          <th>User ID</th>
          <th>Meta message ID</th>
          <th>User Name</th>
          <th>Requested date</th>
          <th>Requested time</th>
          <th>Send date</th>
          <th>Send time</th>
          <th>Request body</th>
          <th>Response</th>
          <th>HTTPcode</th>
          <th>SourceIP</th>
          <th>URL</th>
          <th>Whatsapp number</th>
          <th>Platform type</th>
          <th>Actual body</th>
          <th>WAID</th>
          <th>Phone ID</th>
          <th>Template name</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((item) => (
          <tr key={item.userId}>
            <td>{item.SeqId}</td>
            <td>{item.userId}</td>
            <td>{item.meta_message_id}</td>
            <td>{item.userName}</td>
            <td>{item.RequestedDate}</td>
            <td>{item.RequestedTime}</td>
            <td>{item.SendDate}</td>
            <td>{item.SendTime}</td>
            <td>{item.RequestBody}</td>
            <td>{item.Response}</td>
            <td>{item.HttpCode}</td>
            <td>{item.SourceIP}</td>
            <td>{item.URL}</td>
            <td>{item.WhatsappNumber}</td>
            <td>{item.platform_type}</td>
            <td>{item.ActualBody}</td>
            <td>{item.WAID}</td>
            <td>{item.PhoneID}</td>
            <td>{item.TemplateName}</td>
            <td>{item.Language}</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className="pagination-container">
    <ReactPaginate style={{ }}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={<span>...</span>}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={({ selected: selectedPage }) => setCurrentPage(selectedPage)}
        containerClassName={'pagination'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div> </>
  );
};
export const Tabes = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage =10;
    const pageCount = Math.ceil(data.length/itemsPerPage);
    const offset = currentPage*itemsPerPage;
    const currentPageData = data.slice(offset,offset +itemsPerPage);
  return (
    <>
    <div className='table-container'>
    <table className="custom-table">
      <thead style={{ position: 'sticky', top: '60px', background: 'black' }}>
        <tr>
          <th>Seq ID</th>
          <th>User ID</th>
          <th>WAID</th>
          <th>Meta message ID</th>
          <th>User Name</th>
          <th>Requested date</th>
          <th>Requested time</th>
          <th>Send date</th>
          <th>Send time</th>
          <th>Client URL</th>
          <th>Request body</th>
          <th>HTTPcode</th>
          <th>Actual body</th>
          <th>Response</th>
          <th>Phone ID</th>
          <th>Message Status</th>
          <th>Message Code</th>
          <th>Message Description</th>
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((item) => (
          <tr key={item.userId}>
            <td>{item.SeqId}</td>
            <td>{item.userId}</td>
            <td>{item.WAID}</td>
            <td>{item.meta_message_id}</td>
            <td>{item.userName}</td>
            <td>{item.RequestedDate}</td>
            <td>{item.RequestedTime}</td>
            <td>{item.SendDate}</td>
            <td>{item.SendTime}</td>
            <td>{item.ClientURL}</td>
            <td>{item.RequestBody}</td>
            <td>{item.HttpCode}</td>
            <td>{item.ActualBody}</td>
            <td>{item.Response}</td>
            <td>{item.PhoneID}</td>
            <td>{item.MessageStatus}</td>
            <td>{item.MessageCode}</td>
            <td>{item.MessageDescription}</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className="pagination-container">
    <ReactPaginate style={{ }}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={<span>...</span>}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={({ selected: selectedPage }) => setCurrentPage(selectedPage)}
        containerClassName={'pagination'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div> </>
  );
};

export const Tel = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage =10;
  const pageCount = Math.ceil(data.length/itemsPerPage);
  const offset = currentPage*itemsPerPage;
  const currentPageData = data.slice(offset,offset +itemsPerPage);
return (
  <>
  <div className='table-container'>
  <table className="custom-table">
    <thead style={{ position: 'sticky', top: '60px', background: 'black' }}>
      <tr>
        <th>ID</th>
        <th>Number</th>
        <th>Pri ID</th>
        <th>App URL</th>
        <th>Max Calls</th>
        <th>User ID</th>
        <th>Timeout</th>
        <th>Pri Ownwer</th>
        <th>Create Date Time</th>
        <th>Update Date Time</th>
        <th>Pring</th>
        <th>Is Active</th>
        <th>De Active Date</th>
        <th>App code</th>
        <th>Caller ID</th>
        <th>Location</th>
        <th>Location ID</th>
      </tr>
    </thead>
    <tbody>
      {currentPageData.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.number}</td>
          <td>{item.pri_id}</td>
          <td>{item.app_url}</td>
          <td>{item.user_id}</td>
          <td>{item.max_calls}</td>
          <td>{item.timeout}</td>
          <td>{item.PriOwner}</td>
          <td>{item.CreateDateTime}</td>
          <td>{item.UpdateDateTime}</td>
          <td>{item.PRing}</td>
          <td>{item.IsActive}</td>
          <td>{item.DeActiveDate}</td>
          <td>{item.app_code}</td>
          <td>{item.caller_id}</td>
          <td>{item.Location}</td>
          <td>{item.LocationID}</td>
          </tr>
      ))}
    </tbody>
  </table>
  </div>
  <div className="pagination-container">
  <ReactPaginate style={{ }}
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={<span>...</span>}
      pageCount={pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={5}
      onPageChange={({ selected: selectedPage }) => setCurrentPage(selectedPage)}
      containerClassName={'pagination'}
      previousLinkClassName={'page-link'}
      nextLinkClassName={'page-link'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      activeClassName={'active'}
    />
  </div> </>
);
};

export default {Tabe,Tabes,Tel}