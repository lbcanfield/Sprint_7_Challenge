import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from "./components/App";
import siteVariables from './data/data';

ReactDOM.render(
    <Router>
        <App data={siteVariables} />
    </Router>
    ,
    document.getElementById("root"));
