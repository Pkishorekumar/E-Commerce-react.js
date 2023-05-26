import React from 'react'
import './Bestseller.css'
import RatingStars from 'react-rating-stars-component';
import { bestseller } from '../API-data/bestseller'
import { Link } from 'react-router-dom'
import iPhonePlus from '.././Assets/duel mobiles/duelmobile.png'
// import Store from '../Pages/Store';


const Bestseller = () => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };



  return (
    <div>
      <h1 className='title-bs'>BEST SELLER</h1>


      <div>

        <div className='seller-menu'>
          <div>All</div>
          <div>Mac</div>
          <div>iPhone</div>
          <div>iPad</div>
          <div>iPod</div>
          <div>Accessories</div>
        </div>

      </div>


      <div className='products'>
        <div className='product-container-bs'>
          {bestseller.map(item =>

            <div key={item.id} className='card-div'>
              {/* button */}
              <div className='img-and-btn'>
                <button className='cart-btn'>ADD TO CART</button>
                <div className='img-div'>
                  <img src={item.url} alt="" className='all-image' />
                </div>
                <div className='hot-icon'>
                  <div className='hot-icon-div'>HOT</div>
                </div>

              </div>

              {/* product details */}
              <div className='product-dtls'>
                <h4 className='all-name'>{item.name}</h4>
                <RatingStars count={4} onChange={ratingChanged} size={20} color="#dfeb36" classNames='rating' />
                <div>
                  <span className='all-newprice'>{item.newprice}</span>
                  <span className='all-oldprice'>{item.oldprice}</span>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      <div className='load-more'>
        <Link to='/store' className='load-more'>LOAD MORE</Link>
      </div>


      <div className='offer-div'>
        <div className='offer-dtls'>
          <h1>iPhone 6 Plus</h1>
          <h4>Performance and design. Taken <br /> right to the edge.</h4>
          <Link to='/store' className='offer-shop-now'>SHOP NOW</Link>
        </div>
        <div className='offer-img-div'>
          <img src={iPhonePlus} alt="" className='offer-img' />

        </div>
      </div>


      <div className='service-div'>
        <div>
          <img src="https://th.bing.com/th/id/OIP.U_iqL9fElhldzA_mexVTfQAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={40} /> <br />
          <h4>FREE SHIPPING</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor minim veniam, quis <br />
            nostrud reprehenderit in voluptate velit esse cillum <br />
            dolore eu fugiat nulla pariatur</p>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.rZXEqurUIoYAgyNgv6fenQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={40} /> <br />
          <h4>100% REFUND</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor minim veniam, quis <br />
            nostrud reprehenderit in voluptate velit esse cillum <br />
            dolore eu fugiat nulla pariatur
          </p>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.vmE4UnrcrwvELWvQM5slsAHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={40} /> <br />
          <h4>SUPPORT 24/7</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor minim veniam, quis <br />
            nostrud reprehenderit in voluptate velit esse cillum <br />
            dolore eu fugiat nulla pariatur
          </p>
        </div>
      </div>

    </div>
  )
}

export default Bestseller
