import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Btngroups, PaginationEx, BreadcrumbEx, Overlays, ToastEx } from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledTabsExample, { JustifiedExample, Pilltab } from './Tab';
import Companyinfo, {Termsandconditions} from './Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container mt-3">
      <div className="my-component"><App /></div>
      <div className="my-component"><Btngroups/></div>
      <div className="my-component"><PaginationEx/></div>
      <div className="my-component"><BreadcrumbEx/></div>
      <div className="my-component"><Overlays/></div>
      <div className="my-component"><ToastEx/></div>
      <div className="my-component"><ControlledTabsExample/></div>
      <div className="my-component"><JustifiedExample/></div>
      <div className="my-component"><Pilltab/></div>
      <div className="my-component"><Companyinfo/></div>
      <div className="my-component"><Termsandconditions/></div>
    </div>
  </React.StrictMode>
);