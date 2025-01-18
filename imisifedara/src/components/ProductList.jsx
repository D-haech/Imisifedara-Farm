import React from "react";

const ProductList = ({
  image,
  title,
  breed,
  origin,
  features,
  weight,
  egg,
  size,
  calories,
  protein,
  fat,
  vitamins,
  footer_text
}) => {
  return (
    <div className="md:mx-36 mx-10 mt-6">
      <h3 className="text-center mb-4">{title}</h3>
      <div className="md:flex gap-8">
        <div className="basis-1/2 md:mt-5">
          <img src={image} alt="Product" className="md:w-screen md:h-fit" />
        </div>
        <div className="basis-1/2">
          <p>
            <strong>Breed:</strong> {breed}
          </p>
          <p>
            <strong>Origin:</strong> {origin}
          </p>
          <p>
            <strong>Features:</strong> {features}
          </p>
          <p>
            <strong>Weight:</strong> {weight}
          </p>
          <p>
            <strong>Egg Production:</strong> {egg}
          </p>
          <p>
            <strong>Size range:</strong> {size}
          </p>
          <p>
            <strong>Calories:</strong> {calories}
          </p>
          <p>
            <strong>Protein:</strong> {protein}
          </p>
          <p>
            <strong>Fat:</strong> {fat}
          </p>
          {vitamins && vitamins.length > 0 && (
            <p className="flex">
              <strong>Vitamins:</strong>
              <ul>
                {vitamins.map((vitamin, index) => (
                  <li key={index}>{vitamin}</li>
                ))}
              </ul>
              {/* {vitamins[0]} */}
              
            </p>
          )}
        </div>
      </div>
      <footer>
        <marquee width="100%" direction="left" height="100px">
          {footer_text}
        </marquee>
      </footer>
    </div>
  );
};

export default ProductList;
