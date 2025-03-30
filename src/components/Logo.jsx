import React from 'react'
import LogoImage from "../assets/LogoImage.jpeg"

function Logo({width = '100px'}) {
  return (
    <div>
    <img 
    width={width}
    src={LogoImage} alt = "Logo" />
    </div>
  )
}

export default Logo