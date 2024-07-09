import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

function Companyinfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <h2>Companyinfo( left offcanvas ) </h2>
      <Button variant="primary" onClick={handleShow}>
        Company Info
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Company Info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Here you can put the company information...</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function Termsandconditions() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <h2>Termsandconditions ( bottom offcanvas ) </h2>
      <Button variant="secondary" onClick={handleShow}>
        Terms and Conditions
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Terms and Conditions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Here you can put the terms and conditions...</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}


export default Companyinfo;
export { Termsandconditions };