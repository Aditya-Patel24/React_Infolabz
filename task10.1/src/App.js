import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://isro.vercel.app/api/spacecrafts")
      .then((response) => response.json())
      .then((json) => setData(json.spacecrafts));
  }, []);
  console.log(data);

  return (
    <>
      <h1 className="text-center"> ISRO API</h1>
      <Table  bordered hover>
        <thead className="text-center table-dark">
          <tr>
            <th>SR NO.</th>
            <th>SPACE CRAFTS</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
