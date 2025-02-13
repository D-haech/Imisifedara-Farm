import React from "react";
import Hero, { Display, Reliance, Description } from "../components/Hero";
import pig from "../assets/images/piglet.jpg";
import buyfish from "../assets/images/buyfish.jpg";
import chicks from "../assets/images/chiks.jpg";
import eggs from "../assets/images/eggs.jpg";
import fish from "../assets/images/images/fish.png";
import pig2 from "../assets/images/images/pig112.jpg";
import { useEffect, useRef } from "react";
import chicken from "../assets/images/images/cock11.jpeg";
//import { Description } from "@radix-ui/react-dialog";

const Home = () => {
  const getRef = useRef(0);

  useEffect(() => {
    document.title = `Imisifedara`;
  }, [getRef.current]);
  return (
    <div className="cont">
      <div className="row my-20">
        <Hero></Hero>
      </div>
      <div className="row justify-content-between mb-20 !mx-10">
        <Display
          image={fish}
          heading={`Sustainably Farmed`}
          detail={
            " Experience the best in aquaculture! Our catfish are sourced from clean, sustainable environments, ensuring top-notch quality and flavor. Whether you’re looking for fresh fillets for your next meal or healthy stock for your pond, we’ve got you covered!."
          }
        />
        <Display
          image={pig2}
          heading={`Ideal for Breeding or Butchering`}
          detail={`Discover the best in livestock!
                  Our pigs are raised with care, ensuring high-quality meat that’s 
                  flavorful and tender. Perfect for farmers and culinary enthusiasts alike, 
                  our pigs come in various breeds to suit your needs!`}
        />

        <Display
          image={chicken}
          heading={`Chicken`}
          detail={`Broilers, layers, cocks, and more!`}
        />
      </div>

      <div className="row div3 mb-20">
        <div className="col">
          <Description bgPic={pig} btnText={`Pig and Eat`} />
        </div>
        <div className="col">
          <Description bgPic={buyfish} btnText={`Pig and Eat`} />
        </div>
        <div className="col d-none d-md-block">
          <Description bgPic={chicks} btnText={`Pig and Eat`} />
        </div>
        <div className="col d-none d-md-block">
          <Description bgPic={eggs} btnText={`Pig and Eat`} />
        </div>
      </div>

      <div className="mb-20">
        <Reliance></Reliance>
      </div>
    </div>
  );
};

export default Home;
