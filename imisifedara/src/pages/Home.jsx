import React from "react";
import Hero, { Display, Reliance, Description } from "../components/Hero";
import pig from "../assets/images/pig116.jpg";
import fish from "../assets/images/images/fish.png";
import pig2 from "../assets/images/images/pig112.jpg";
import { useEffect, useRef } from "react";
//import { Description } from "@radix-ui/react-dialog";

const Home = () => {
  const getRef = useRef(0);

  useEffect(() => {
    document.title = `Imisifedara`;
  }, [getRef.current]);
  return (
    <div className="cont">
      <div className="row">
        <Hero></Hero>
      </div>
      <div className="row">
        <Display
          image={fish}
          heading={`Raw is war`}
          detail={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat nisi accusamus eveniet ipsa hic quo veniam, ex quia asperiores."
          }
        ></Display>
        <Display image={pig2} />
      </div>

      <div>
        <Description bgPic={pig} btnText={"Pullets \n Available"}></Description>
      </div>
      <div>
        <Reliance></Reliance>
      </div>
    </div>
  );
};

export default Home;
