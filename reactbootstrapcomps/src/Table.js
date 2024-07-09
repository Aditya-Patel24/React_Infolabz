import React from 'react';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Passbadge, Failbadge } from './Navbar';
function Resulttble() {
    return (
        <div className="Resulttble">
            <h1>Result Table Component</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Student Name</th>
                        <th>Maths Marks</th>
                        <th>Phy Marks</th>
                        <th>Chem Marks</th>
                        <th>Pass / Fail Badge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rahul</td>
                        <td>90</td>
                        <td>80</td>
                        <td>70</td>
                        <td><Passbadge /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td>40</td>
                        <td>30</td>
                        <td><Failbadge /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Akay</td>
                        <td>70</td>
                        <td>60</td>
                        <td>50</td>
                        <td><Passbadge /></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Virat</td>
                        <td>80</td>
                        <td>70</td>
                        <td>60</td>
                        <td><Passbadge /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Resulttble;