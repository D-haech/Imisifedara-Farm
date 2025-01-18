import React from "react";
import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import ProductList from '../components/ProductList';
import duroc from "../assets/images/images/Duroc-Pig.jpg";
import pig from "../assets/images/images/Large-White-pig.jpg";

const Livestock = () => {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const vitamins = [
    "High in zinc and iron.",
    "Thiamine: Boosts energy production.",
    "B6: Supports brain health and metabolism.",
    "Zinc: Strengthens the immune system.",
    "Iron: Promotes healthy blood production."
  ]

  return (
    <div className="bg-gray-100 rounded-sm">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ProductList
            image={duroc}
            title="Pork (Fresh Cuts)"
            breed="Duroc"
            origin="Bred for marbled meat and excellent taste."
            features="Known for its tender and juicy meat."
            weight="Typically 1–3 kg per cut."
            size="Ribs, chops, belly, and leg."
            calories="250 kcal"
            protein="26g"
            fat="17g"
            vitamins={vitamins.slice(0, 1)}
            footer_text="COOKING METHODS: Slow-cook for juicy ribs. Fry pork belly for crispy crackling.
                        STORAGE: Refrigerate or freeze immediately after purchase."
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProductList
            image={pig}
            title="Piglet (Weaner Pig)"
            breed="Large White"
            origin="Known for fast growth, high fertility, and excellent meat quality."
            features="Typically raised to market weight within 5-6 months."
            weight="15 – 20 kg (for weaner piglets)"
            size="Compact and healthy, ideal for rearing."
            calories="242 kcal"
            protein="27g"
            fat="14g"
            vitamins={vitamins.slice(1, 5)}
            footer_text="COOKING METHODS: GRILLED PORK CHOPS: Season with garlic and herbs, grill for 10-15 minutes.
                        ROAST PORK BELLY: Slow-roast at 180°C for 2 hours for tender meat.
                        STIR-FRY: Combine with vegetables for a quick and healthy dish.
                        STORAGE: Freeze meat at -18°C for up to 6 months."
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Livestock;
