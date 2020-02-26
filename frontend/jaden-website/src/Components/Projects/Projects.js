import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../Header/Header';


function Projects() {
  return (
      <div>
        <Header/>
        <h1>Projects</h1>
      </div>
  );
}

export default Projects;
