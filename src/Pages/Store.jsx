import React from 'react'
import iphonecut from '.././Assets/duel mobiles/iphonecut.png'
import './store.css'
import { Applecardata } from '../Store-API/Applecar'
import { Airportdata } from '../Store-API/Airport'
import { Cablesdata } from '../Store-API/Cables'
import { Casesdata } from '../Store-API/Casesfilms'
import { Chargerdata } from '../Store-API/Chargers'
import { Connectdata } from '../Store-API/Connecthome'
import { Headphonesdata } from '../Store-API/Headphones'
import { Applecar } from '../Storecompo/Applecar'
import { Airports } from '../Storecompo/Airports'
import { Cables } from '../Storecompo/Cables'
import { Casesfilms } from '../Storecompo/Casesfilms'
import { Chargers } from '../Storecompo/Chargers'
import { Connecthome } from '../Storecompo/Connecthome'
import { Headphones } from '../Storecompo/Headphones'
import { useState } from 'react'
import { Info } from '../INFO/Info'
import { Pdetails } from '../Pagedetails/Pdetails'

const Store = () => {
  const [Accesshow, setAccesshow] = useState('handlefilter1')


  function handlefilter1() {
    setAccesshow("handlefilter1");
  }
  function handlefilter2() {
    setAccesshow("handlefilter2");
  }
  function handlefilter3() {
    setAccesshow("handlefilter3");
  }
  function handlefilter4() {
    setAccesshow("handlefilter4");
  }
  function handlefilter5() {
    setAccesshow("handlefilter5");
  }
  function handlefilter6() {
    setAccesshow("handlefilter6");
  }
  function handlefilter7() {
    setAccesshow("handlefilter7");
  }


  // price range
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  function handleMinPriceChange(event) {
    setMinPrice(event.target.value);
  }

  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value);
  }



  return (
    <div>
      <div className='store-header'>
        Store/Accessoriess
      </div>

      <div className='store-offer-cont'>
        <div className='store-offer-dtls'>
          <h1>iPhone 6 Plus</h1>
          <h4>Performance and design. Taken <br /> right to the edge.</h4>
          <h5 className='offer-shop-now-store'>SHOP NOW</h5>
        </div>
        <div className='store-offer-img-div'>
          <img src={iphonecut} alt="" className='store-offer-img' />
        </div>
      </div>


      <div className='acces-store-filter-list'>
        <h4 className='store-acces-head'>ACCESORIES</h4>
        <div className='accesories-div-store'>

          <div className='acces-list-btn'>
            <div onClick={handlefilter1}>Apple Car <span className='produt-length1'>{Applecardata.length}</span>  </div>
            <div onClick={handlefilter2}>Air port & wireless  <span className='produt-length2'>{Airportdata.length}</span>   </div>
            <div onClick={handlefilter3}>Cables & Docks  <span className='produt-length3'>{Cablesdata.length}</span>   </div>
            <div onClick={handlefilter4}>Cases & Films  <span className='produt-length4'>{Casesdata.length}</span>   </div>
            <div onClick={handlefilter5}>Charging Devices  <span className='produt-length5'>{Chargerdata.length}</span>   </div>
            <div onClick={handlefilter6}>Connected home  <span className='produt-length6'>{Connectdata.length}</span>   </div>
            <div onClick={handlefilter7}>Headphones  <span className='produt-length7'>{Headphonesdata.length}</span>   </div>
          </div>

        </div>


        <div className='store-price-range-div'>
          <h4>Price Range</h4>
          <div className='store-price-range'>
            <span>{minPrice}</span> <br />
            <input type="range" id="min-price" min="0" max="500" value={minPrice} onChange={handleMinPriceChange} className='input-range' /> <br />
            <input type="range" id="max-price" min="500" max="1000" value={maxPrice} onChange={handleMaxPriceChange} className='input-range' /> <br />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className='store-color-filter'>
          <h4>Color</h4>
          <div>
            <span className="radio-color blue"></span>
            <span className="radio-color red"></span>
            <span className="radio-color black"></span>
            <span className="radio-color yellow"></span>
            <span className="radio-color pink"></span>
            <span className="radio-color lightgray"></span>
          </div>
        </div>

      </div>


      <div className='product-viewer'>
        {Accesshow === "handlefilter1" && <Applecar />}
        {Accesshow === "handlefilter2" && <Airports />}
        {Accesshow === "handlefilter3" && <Cables />}
        {Accesshow === "handlefilter4" && <Casesfilms />}
        {Accesshow === "handlefilter5" && <Chargers />}
        {Accesshow === "handlefilter6" && <Connecthome />}
        {Accesshow === "handlefilter7" && <Headphones />}
      </div>


      <table className='store-footer-table' >
        <tr>
          <th>Previous</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>Next</th>
        </tr>
      </table>




      <Info />
      <Pdetails />

    </div>
  )
}

export default Store
