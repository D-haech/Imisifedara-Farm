import React from 'react'
import { useEffect, useRef } from 'react';
import about_img from "../assets/images/about-us-img-01.jpg";


const About = () => {
  const getRef = useRef(0)
  
  useEffect(()=>{
    document.title = `About Us`
  }, [getRef.current]);
  
  return (
    <div className="mx-16">
      <div className="md:flex gap-x-16 mt-16">
        <div className="basis-1/2">
          <h2 className="text-center mb-8">A HERITAGE OF QUALITY FLOCK</h2>
          <img src={about_img} alt="flocks" />
          <p className="hidden md:inline-block lg:hidden mt-5">
            At Imisifedara we thrive in naturally raised flocks as our flocks
            are raised in a stress-free environment, free from antibiotics and
            hormones, sustainable farming practices,commitment to quality, and
            strong community ties. We're not just delivering products—we're
            helping you create your ideal flock with confidence and care.
          </p>
        </div>
        <div className="basis-1/2 mt-16">
          <p>
            At Imisifedara, we provide everything you need to raise and care for
            your flock with ease and confidence. As your trusted marketplace, we
            offer a broad selection of quality birds, pigs, supplies, and
            practical resources, all designed to meet the unique needs of
            poultry keepers of all sizes and scales.
          </p>

          <p>
            We are committed to raising healthy, high-quality pigs. We pride
            ourselves on our traditional farming methods and our dedication to
            animal welfare. Our pigs are raised in open-air environments, free
            to roam and forage naturally
          </p>

          <p>
            With a commitment to quality and convenience, Imisifedara ensures
            that your journey is supported every step of the way, from selecting
            the right birds, pigs,goats and sheep to ensuring they thrive in
            their new home. We believe in making poultry raising
            straightforward, accessible, and rewarding for anyone who shares a
            passion for self-sufficiency, sustainable living, or simply the joy
            of watching a flock grow.
          </p>

          <p className="md:hidden lg:inline-block">
            At Imisifedara we thrive in naturally raised flocks as our flocks
            are raised in a stress-free environment, free from antibiotics and
            hormones, sustainable farming practices,commitment to quality, and
            strong community ties. We're not just delivering products—we're
            helping you create your ideal flock with confidence and care.
          </p>
        </div>
      </div>
      <div className="md:flex gap-x-10 mt-10">
        <div className="basis-1/3">
          <h3 className="text-center mb-6 text-[#597e2e]">OUR HISTORY</h3>
          <p>
            Imisifedara Farm is a family-owned business with roots stretching
            back to 2019. Founded by OluwaToyin Afolabi, our farm has been a
            cornerstone of the local community, providing fresh, high-quality
            poultry products for generations. What began as a small-scale
            operation has grown into a thriving farm, committed to sustainable
            practices and animal welfare.
          </p>
        </div>
        <div className="basis-1/3">
          <h3 className="text-center mb-6 text-[#597e2e]">OUR MISSION/VISION</h3>
          <p>
            Our mission at Imisifedara Farm is to provide our customers with the
            finest, naturally raised poultry products. We strive to:
          </p>
          <ol type="i" className='list-decimal'>
            <li>
              <strong>Source Quality:</strong> We prioritize the health and well-being of our animals, 
              ensuring they are raised in stress-free environments and fed a nutritious diet.
            </li><br />
            <li>
              <strong>Sustain the Earth:</strong> We are committed to sustainable farming practices that 
              minimize our environmental impact and preserve natural resources
            </li><br />
            <li>
              <strong>Nourish Our Community:</strong> We believe in providing wholesome, nutritious 
              food that contributes to the health and well-being of our community.
            </li><br />
          </ol>
        </div>
        <div className="basis-1/3">
          <h3 className="text-center mb-6 text-[#597e2e]">OUR VALUES</h3>
          <ol type="A" className='list-decimal'>
            <li>
              <strong>QUALITY:</strong> We are dedicated to producing the highest quality poultry products, 
              free from artificial additives and hormones.
            </li><br />
            <li>
              <strong>INTEGRITY:</strong> We conduct our business with honesty, transparency, and fairness.
            </li><br />
            <li>
              <strong>SUSTAINABILITY:</strong> We are committed to environmentally responsible practices that 
              protect our planet for future generations.
            </li><br />
            <li>
              <strong>COMMUNITY:</strong> We are proud to be part of our local community and strive to make a positive impact
            </li><br />
            
          </ol>
          <p>
            Imisifedara Farm is more than just a farm; it's a legacy of quality, tradition, 
            and a commitment to providing the best for our customers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About