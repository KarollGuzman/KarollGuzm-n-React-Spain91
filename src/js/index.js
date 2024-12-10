//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {SimpleCounter} from "./component/SimpleCounter.jsx";
ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter/>);

