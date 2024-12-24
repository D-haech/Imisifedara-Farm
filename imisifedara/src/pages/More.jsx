import React from 'react'
import { useEffect, useRef } from 'react'


const More = () => {
const getRef = useRef(0)
  
  useEffect(()=>{
    document.title = `More`
  }, [getRef.current])
  return (
    <div>More</div>
  )
}

export default More