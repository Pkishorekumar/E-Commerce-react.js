import React from 'react'

import mobileimg from '.././Assets/duel mobiles/duelmobile.png'
import Bestseller from '../Best seller/Bestseller'
import { Slider } from '.././Productslider/Slider'
import { Info } from '../INFO/Info'
import { Pdetails } from '../Pagedetails/Pdetails'


const Home = () => {
  return (
    <div>

      {/* mobile picture */}

      <div className='home-mobile-div'>
        <div className='home-mobile-pic'></div>
        <img src={mobileimg} alt="" className='home-mobile-img' />
      </div>

      <Bestseller />

      <Slider />
      <Info />
      <Pdetails />
    </div>
  )
}

export default Home
