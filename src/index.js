import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from "./components/App";
import data from './data/data.js';


ReactDOM.render(
    <Router>
        <App data={data} />
    </Router>
    ,
    document.getElementById("root"));
