import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../Header/Header';


function Resume() {
  return (
      <div>
        <Header/>
        <h1>Resume</h1>
      </div>
  );
}

export default Resume;
