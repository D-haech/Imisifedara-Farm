import React from "react";
import Hero, { Display, Reliance, Description } from "../components/Hero";
import pig from "../assets/images/pig116.jpg";
import fish from "../assets/images/images/fish.png";
import chick from "../assets/images/chick.jpg";
import pig2 from "../assets/images/images/pig112.jpg";
import { useEffect, useRef } from "react";
//import { Description } from "@radix-ui/react-dialog";

const Home = () => {
  //To change the title bar name
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
        <Display image={pig2} /><Display image={chick} heading={`Day old chick`} detail={`Day old chocks are available for sale`}/>
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
