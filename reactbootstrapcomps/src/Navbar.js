import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bdgmain() {
    return (
        <div>
            <h1>Badges</h1>
            <Badge bg="primary">Primary Badge</Badge>
        </div>
    )
}
function Btnbadge() {
    return (
        <div>
            <h1>Button Badge</h1>
            <Button variant="primary">
                Notifications <Badge bg="secondary">9</Badge>
            </Button>
        </div>
    )
}
function Successbadge() {
    return (
        <div>
            <h1>Success Badge</h1>
            <Badge bg="success">Success Badge</Badge>
        </div>
    )
}
function Pillsuccessbadge() {
    return (
        <div>
            <h1>Pill Success Badge</h1>
            <Badge pill bg="success">Success Badge</Badge>
            <Successbadge/>
        </div>
    )
}
function Passbadge() {
    return (
        <div>
            <Badge bg="success">Pass</Badge>
        </div>
    )
}
function Failbadge() {
    return (
        <div>
            <Badge bg="danger">Fail</Badge>
        </div>
    )
}
export default Bdgmain;
export { Btnbadge, Pillsuccessbadge, Passbadge, Failbadge };
