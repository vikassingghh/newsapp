import React from 'react'
import gif from "../Images/mobile to desktop (GIF).gif"
import './Hero.css'

const Hero = () => {
  return (
    <div className='container'>
      <div className="row">
            <div className="col-lg-6 justify-content-center algin-items-start">
                <h1>See News</h1>
                <p>From Anywhere</p>
                <p>In any Size</p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
                <img src={gif} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Hero
