import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mainmodel() {
    return (
        <div>
            <h1>Main Model</h1>
            <Button variant="primary">Launch Main Model</Button>
        </div>
    )
}
function Fullscreenmodel() {
    return (
        <div>
            <h1>Full Screen Model</h1>
            <Button variant="primary">Launch Full Screen Model</Button>
        </div>
    )
}
function Largemodel() {
    return (
        <div>
            <h1>Large Model</h1>
            <Button variant="primary">Launch Large Model</Button>
        </div>
    )
}
export default Mainmodel;
export { Fullscreenmodel, Largemodel };