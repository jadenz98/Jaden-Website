import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Header from '../Header/Header';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import headshot from '../../Resources/headshot.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';



function Home() {
  return (
      <div className="parent">
      <Header/>
      <Container className="purdue-background" fluid={true}>
        <Row fluid={true} className="panel">
            <Col sm={6}>
            </Col>
            <Col className="black-background" sm={6}>
                <Image roundedCircle className="headshot" src={headshot}/>
                <div className="intro-text">
                    Hello, my name is Jaden Zerbe and I welcome you to my website. 
                    This website is built using React.js and is hosted on my
                    raspberry pi. I hope you find it to be informative and a good
                    showcase of my abilities.
                </div>
            </Col>
        </Row>
      </Container>
      </div>
  );
}

export default Home;
