import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './Register';


//import Register from './Register';
import Register2 from './Register2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register2 />
    <Register/>
    
  </React.StrictMode>
);

