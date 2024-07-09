import React from 'react';
import Bdgmain from './Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
function First() {
  return (
    <div className="First">
      <h1>First Component</h1>
    </div>
  );
}
function Second() {
  return (
    <div className="Second">
      <h1>Second Component</h1>
      <Bdgmain/>
    </div>
  );
}
export default App;
export {Second};