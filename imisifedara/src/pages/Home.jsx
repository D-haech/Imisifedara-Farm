import React from "react";
import Hero, { Display, Reliance, Description } from "../components/Hero";
import pig from "../assets/images/pig116.jpg";
import fish from "../assets/images/images/fish.png";
import pig2 from "../assets/images/images/pig112.jpg";
import { useEffect } from "react";
//import { Description } from "@radix-ui/react-dialog";

const Home = () => {
  useEffect(() => {
    document.title = `Imisifedara`;
  }, []);
  return (
    <div className="cont">
      <div className="row">
        <Hero></Hero>
      </div>
      <div className="row">
        <Display
          image={fish}
          heading={`Raw is war`}
          detail={"Let us resume the war"}
        ></Display>
        <Display image={pig2} />
      </div>

      <div>
        <Description bgPic={pig} btnText={`Let them come`}></Description>
      </div>
      <div>
        <Reliance></Reliance>
      </div>
    </div>
  );
};

export default Home;
