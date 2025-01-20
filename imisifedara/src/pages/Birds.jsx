import React from "react";
import { useState } from 'react';
import ProductList from "../components/ProductList";
import isa_brown  from "../assets/images/images/isa_brown_layer-bird.png";
import rhode_island  from "../assets/images/images/rhode_island_red.jpg";
import broiler from "../assets/images/images/boiler-chicken-jpg.png";
import turkey from "../assets/images/images/turkeys11.jpg";
import { Carousel } from "react-bootstrap";

const Birds = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  const vitamins = [
    "Vitamin D: Essential for bone health.",
    "Choline: Supports brain function.",
    "High in phosphorus and selenium.",
    "B12: Supports energy production and brain health.",
    "Niacin: Promotes healthy skin and digestion.",
    "Phosphorus: Essential for bone health.",
    "Selenium: Boosts immunity and thyroid function.",
    "High in Vitamin B6 and niacin."
  ];
  return (
    <div className="bg-gray-100 rounded-sm" >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ProductList 
            image={isa_brown}
            title="Layer Bird (Laying Hen)"
            breed="Isa Brown"
            origin="Breed for high egg production."
            features="Hardy birds with a lifespan of up to 2 years."
            weight="1.5–2 kg."
            egg="280–320 eggs per year."
            calories="155 kcal"
            protein="13g"
            fat="11g"
            vitamins={vitamins.slice(0, 2)}
            footer_text="EGGS USAGE: Boil, fry, or bake into cakes and pastries.Use raw eggs for protein shakes. 
                          STORAGE: Store eggs in a cool, dry place for up to 3 weeks."
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProductList 
            image={rhode_island}
            title="Cock (Male Chicken)"
            breed="Rhode Island Red."
            origin="U.S.A., known for its hardiness and flavorful meat."
            features="Medium to large size with reddish-brown feathers."
            weight="3–4 kg."
            egg="None"
            size=" Large, suitable for feasts and celebrations."
            calories="239 kcal"
            protein="27g"
            fat="14g"
            vitamins={vitamins.slice(2, 3)}
            footer_text="COOKING METHODS: Stew with spices for a rich flavor, Roast with herbs and serve with vegetables.
                        STORAGE: Refrigerate fresh cock meat below 4°C and consume within 3 days."
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProductList 
            image={broiler}
            title="Broiler Chicken (Cornish Cross)"
            breed="Cornish Cross"
            origin="Developed for high meat yield and rapid growth."
            features="Typically 6-8 weeks before processing for optimal quality."
            weight="3–4 kg."
            egg="None"
            size="Medium to Large, suitable for family-sized meals."
            calories="165 kcal, 85mg Cholesterol"
            protein="31g"
            fat="3.6g"
            vitamins={vitamins.slice(3, 7)}
            footer_text="COOKING METHODS: GRILLED: Marinate with spices and grill for 20 minutes. 
                        ROASTED: Season with herbs, roast at 375°F for 45 minutes.
                        FRIED: Coat with batter, fry until golden brown.
                        STORAGE: Refrigerate below 4°C and consume within 3 days."
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProductList 
            image={turkey}
            title="Turkey"
            breed="Broad Breasted White"
            origin=" Known for high meat yield and tender texture."
            features="Large birds ideal for celebrations."
            weight="7-12 kg."
            egg="None"
            size=" Large"
            calories="135 kcal"
            protein="29g"
            fat="1g"
            vitamins={vitamins.slice(7, 8)}
            footer_text="COOKING METHODS: Make turkey stew for smaller portions, Roast for 2–3 hours, seasoned with herbs.
                        STORAGE: Freeze immediately for long-term storage."
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Birds;
