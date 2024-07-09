import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mainmodel from './Modelpage';
import Resulttble from './Table';
import { Fullscreenmodel, Largemodel } from './Modelpage';
import { Second } from './App';
import { Btnbadge, Pillsuccessbadge, Passbadge, Failbadge } from './Navbar';
import Bdgmain from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Second />
    <Mainmodel />
    <Fullscreenmodel />
    <Largemodel />
    <Resulttble />
    <Bdgmain />
    <Btnbadge />
    <Pillsuccessbadge />
    <Passbadge />
    <Failbadge />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
