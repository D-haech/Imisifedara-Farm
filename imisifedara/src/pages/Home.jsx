import React from "react";
import Hero, { Display, Footer, Reliance } from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import pig from "../assets/images/pig116.jpg";
import fish from "../assets/images/images/fish.png"
import pig2 from "../assets/images/images/pig112.jpg"
import { useEffect } from "react";

const Home = () => {
useEffect(() =>{document.title =`Imisifedara`})
  return (
    <div>
      <div className="row">
        <Hero></Hero>
      </div>
      <div className="row">
        <Display image={fish} heading={`Raw is war`} detail={"Let us resume the war"}></Display>
        <Display image={pig2}/>
      </div>

      <Row>
        <Reliance></Reliance>
      </Row>

      <Row>
        <Footer></Footer>
      </Row>
    </div>
  );
};

export default Home;
