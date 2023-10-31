// TableComponent.js
import React ,{useState}from 'react';
import ReactPaginate from 'react-paginate';
// import './Tabu.css'
import './TableSer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Tabe = ({ data }) => {
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

export default Tabe;
