import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "../Tables/Register.scss"

const CustomForm = () => {
  return (
    <Form>
      <Form.Group controlId="formSeqID">
        <Form.Label className='form_label'>Seq ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Seq ID" className="form-control"  />
      </Form.Group>

      <Form.Group controlId="formUserID">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" placeholder="Enter User ID" />
      </Form.Group>

      <Form.Group controlId="formWAID">
        <Form.Label>WAID</Form.Label>
        <Form.Control type="text" placeholder="Enter WAID" />
      </Form.Group>

      <Form.Group controlId="formMetaMessageID">
        <Form.Label>Meta Message ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Meta Message ID" />
      </Form.Group>

      <Form.Group controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" />
      </Form.Group>

      <Form.Group controlId="formRequestedDate">
        <Form.Label>Requested Date</Form.Label>
        <Form.Control type="date" placeholder="Enter Requested Date" />
      </Form.Group>

      <Form.Group controlId="formRequestedTime">
        <Form.Label>Requested Time</Form.Label>
        <Form.Control type="time" placeholder="Enter Requested Time" />
      </Form.Group>

      <Form.Group controlId="formSendDate">
        <Form.Label>Send Date</Form.Label>
        <Form.Control type="date" placeholder="Enter Send Date" />
      </Form.Group>

      <Form.Group controlId="formSendTime">
        <Form.Label>Send Time</Form.Label>
        <Form.Control type="time" placeholder="Enter Send Time" />
      </Form.Group>

      <Form.Group controlId="formClientURL">
        <Form.Label>Client URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Client URL" />
      </Form.Group>

      <Form.Group controlId="formRequestBody">
        <Form.Label>Request Body</Form.Label>
        <Form.Control type="text" placeholder="Enter Request Body" />
      </Form.Group>

      <Form.Group controlId="formHTTPCode">
        <Form.Label>HTTP Code</Form.Label>
        <Form.Control type="text" placeholder="Enter HTTP Code" />
      </Form.Group>

      <Form.Group controlId="formActualBody">
        <Form.Label>Actual Body</Form.Label>
        <Form.Control type="text" placeholder="Enter Actual Body" />
      </Form.Group>

      <Form.Group controlId="formResponse">
        <Form.Label>Response</Form.Label>
        <Form.Control type="text" placeholder="Enter Response" />
      </Form.Group>

      <Form.Group controlId="formPhoneID">
        <Form.Label>Phone ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone ID" />
      </Form.Group>

      <Form.Group controlId="formMessageStatus">
        <Form.Label>Message Status</Form.Label>
        <Form.Control type="text" placeholder="Enter Message Status" />
      </Form.Group>

      <Form.Group controlId="formMessageCode">
        <Form.Label>Message Code</Form.Label>
        <Form.Control type="text" placeholder="Enter Message Code" />
      </Form.Group>

      <Form.Group controlId="formMessageDescription">
        <Form.Label>Message Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Message Description" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CustomForm;