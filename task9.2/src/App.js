import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=sports")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

  return (
    <div className="container mt-5">
    <h1 className="mb-4 head">Sports News</h1>
    <Table striped bordered hover>
      <thead  >
        <tr>
          <th>SrNo.</th>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Content</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.date}</td>
            <td>{item.content}</td>
            <td>
              <img src={item.imageUrl} alt={item.title} style={{ width: '100px' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
    
    );
}

export default App;




