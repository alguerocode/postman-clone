import "bootstrap/dist/css/bootstrap.min.css";
import 'react-json-pretty/themes/monikai.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/js/bootstrap.bundle"
import App from './App';

// render to the dom

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

