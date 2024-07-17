import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
     <h1>Bitcoin Live Data</h1>
     <BitcoinData/>
     <img src="https://media3.giphy.com/media/EIOKH2p0wqgl9KW5fg/giphy.gif" alt="" />
    </div>
  );
}

export function BitcoinData() {
  const [data, setData] = useState([]);
  const apiGet = async () => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response)=> response.json())
    .then((json) => setData(json.bpi.USD))
  }
useEffect(() => {
  const interval = setInterval(() => {
    apiGet();
  }, 1000);
  return () => clearInterval(interval);
}
, []);
return(
  <h1>{data.rate}</h1>
);
}
export default App;
