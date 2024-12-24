import React from 'react'
import { useEffect, useRef } from 'react';


const About = () => {
  const getRef = useRef(0)
  
  useEffect(()=>{
    document.title = `About Us`
  }, [getRef.current]);
  
  return (
    <div>About</div>
  )
}

export default About