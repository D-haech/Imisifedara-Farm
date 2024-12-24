import React from 'react'
import { useEffect,useRef } from 'react'



const Contact = () => {
  const getRef = useRef(0)

useEffect(()=>{
  document.title = `Contact Us`
}, [getRef.current]);
  return (
    <div>Contact</div>
  )
}

export default Contact