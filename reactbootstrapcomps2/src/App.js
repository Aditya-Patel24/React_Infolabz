import "./App.css";
// import { ButtonGroup, Button } from "react-bootstrap";
// import { Pagination } from "react-bootstrap";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Overlay, Tooltip } from "react-bootstrap";
// import { useRef, useState } from "react";
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';
import { ButtonGroup, Button, Pagination, Overlay, Tooltip, Toast, ToastContainer } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useRef, useState } from "react";
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
function Btngroups() {
  return (
    <div>
      <h2>Button Groups</h2>
      <ButtonGroup>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </ButtonGroup>
    </div>
  );
}

function PaginationEx() {
  return (
    <>
      <h2>Pagination</h2>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}

function BreadcrumbEx() {
  return (
    <>
    <h2>Breadcrumb</h2>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    </>
  );
}

function Overlays() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div>
      <h2>Overlays</h2>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}


function ToastEx() {
  return (
    <>
    <h2>Toast</h2>
    <ToastContainer className="position-static">
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
    </>
  );
}


export default App;
export { Btngroups, PaginationEx, BreadcrumbEx, Overlays, ToastEx};
