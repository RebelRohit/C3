// TableComponent.js
import React ,{useState}from 'react';
import ReactPaginate from 'react-paginate';
// import './Tabu.css'
import './TableSer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Tabs = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage =10;
    const pageCount = Math.ceil(data.length/itemsPerPage);


    const offset = currentPage*itemsPerPage;
    const currentPageData = data.slice(offset,offset +itemsPerPage);
  return (
    <>
    <div className='table-container'>
    <table className="table table-striped">
      <thead style={{ position: 'sticky', top: '60px', background: 'white' }}>
        <tr>
          <th>Seq ID</th>
          <th>User ID</th>
          <th>Meta message id</th>
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
          <th>language</th>
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((item) => (
          <tr key={item.userid}>
            <td>{item.seqid}</td>
            <td>{item.userid}</td>
            <td>{item.meta_message_id}</td>
            <td>{item.requested_date}</td>
            <td>{item.requested_time}</td>
            <td>{item.send_date}</td>
            <td>{item.send_time}</td>
            <td>{item.request_body}</td>
            <td>{item.response}</td>
            <td>{item.httpcode}</td>
            <td>{item.sourceip}</td>
            <td>{item.url}</td>
            <td>{item.whatsapp_number}</td>
            <td>{item.platform_type}</td>
            <td>{item.actualbody}</td>
            <td>{item.WAID}</td>
            <td>{item.phone_id}</td>
            <td>{item.template_name}</td>
            <td>{item.language}</td>
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
        marginPagesDisplayed={2}
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

export default Tabs;
