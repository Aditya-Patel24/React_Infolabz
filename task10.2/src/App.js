import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=sports")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);
  console.log(data);

  return (
    <>
      <h1 className="text-center"> ISRO API</h1>
      <Table striped bordered hover>
      <thead class="table-dark">
            <tr>
                <th scope="col">SR. NO.</th>
                <th scope="col">NEWS TITLE</th>
                <th scope="col">AUTHOR</th>
                <th scope="col">DATE & TIME</th>
            </tr>
        </thead>
        <tbody>
        {data.map((element, index) => (
          <tr key={index}>
            
                <th scope="row">{index + 1}</th>
                <td>{element.title}</td>
                <td>{element.author}</td>
                <td>{element.date},   {element.time}</td>
               
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
