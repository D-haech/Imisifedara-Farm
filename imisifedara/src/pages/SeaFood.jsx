import React from 'react'
import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import ProductList from '../components/ProductList';
import catfish from "../assets/images/images/African-Catfish.png";
import tilapia from "../assets/images/images/Nile-tilapia.png";



const SeaFood = () => {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const vitamins = [
    "Omega-3: Promotes heart health and brain function.",
    "Minerals: High in potassium and phosphorus.",
    "Omega-3: Supports heart and brain health."
  ]

  return (
    <div className="bg-gray-100 rounded-sm">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
          <ProductList 
            image={catfish}
            title="Catfish (African Catfish)"
            breed="Clarias gariepinus"
            origin="Native to Africa, known for its adaptability to diverse water conditions."
            features="Firm, meaty texture with no scales and a mild flavor."
            weight="1–3 kg (adult fish)."
            size="30–50 cm in length."
            calories="105 kcal"
            protein="18g"
            fat="3g"
            vitamins={vitamins.slice(0, 2)}
            footer_text="COOKING METHODS: GRILLED: Marinate with lemon and spices, grill for 15 minutes, PEPPER SOUP:
                          Add to a spiced broth for a traditional African dish, FRIED: Coat in flour and deep fry until golden brown. 
                          STORAGE: Store eggs in a cool, dry place for up to 3 weeks."
          />
        </Carousel.Item>
      <Carousel.Item>
          <ProductList 
            image={tilapia}
            title="Tilapia Fish"
            breed="Nile Tilapia"
            origin="Freshwater fish known for its mild flavor and versatility."
            features="White, flaky meat with high adaptability to various dishes."
            weight="500g–1.5 kg."
            size="Medium"
            calories="96 kcal"
            protein="20g"
            fat="2g"
            vitamins={vitamins.slice(2, 3)}
            footer_text="COOKING METHODS: Fry or bake with spices.
                          Use in soups and stews. 
                          STORAGE: Refrigerate fresh for up to 2 days or freeze for longer."
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SeaFood