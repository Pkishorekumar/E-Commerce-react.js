import React from 'react'
import './Header.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cart from '.././Cart/Cart'
// import Profile from '../.././src/Profile/Profile'
import Home from '.././Pages/Home'
import Store from '.././Pages/Store'
import Iphone from '.././Pages/Iphone'
import Ipad from '.././Pages/Ipad'
import Acces from '.././Pages/Accessories'
import Mack from '.././Pages/Maclbook'



const Header = () => {
  const [click, setClick] = useState(true)
  const handleprofile = () => setClick((current) => !current);




  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlename = (event) => {
    event.preventDefault(event)
    setName(event.target.value)
    console.log(event + 'name entered')
  }
  const handleemail = (event) => {
    event.preventDefault(event)
    setEmail(event.target.value)
    console.log(event + 'email entered')
  }
  const handleform = (event) => {
    event.preventDefault(event)
    console.log('form submited' + event)

  }



  const [data, setData] = useState(true)
  const handdleover = () => setData((current) => !current)
  const handdleleave = () => setData((current) => !current)


  return (
    <div>
      <div className='header'>
        <div className='header-one'>
          <div>

            <select name="" id="" className='drop-down'>
              <option value="IN">IN</option>
              <option value="EN">EN</option>
            </select>
          </div>
          <div>


            <select name="" id="" className='drop-down'>
              <option value="&#8377;">&#8377;</option>
              <option value="$">$</option>
            </select>

          </div>
        </div>


        <div className='header-two'>
          <BrowserRouter>
            <div className='header-two-one'>
              <div>
                <div className='header-two-two' onClick={handleprofile}><span>&#128100;</span>My Profile</div>
                <div className='profile-form-con'>
                  {
                    !click ? <div className='profile-form'>
                      <h4>LOGIN or SINGUP</h4>
                      <form action="">
                        <label htmlFor="" className='lables'>Name</label> <br />
                        <input type="text" name="name" id="" placeholder='enter your name' value={name} onChange={handlename} /> <br />
                        <label htmlFor="" className='lables'>Email</label> <br />
                        <input type="email" name="email" id="" placeholder='enter email' value={email} onChange={handleemail} /><br /><br />
                        <input type="submit" value="CLICK" className='profile-click' onClick={handleform} />  <br /> <br />
                        <hr />
                        <p>or</p>

                        <div className='social-login-f'>
                          <img src="https://clipartcraft.com/images/facebook-logo-circle-2.png" alt="" width={45} />
                        </div> <br />
                        <div className='social-login-g'>
                          <img src="https://th.bing.com/th/id/R.c8bf7c087ca9793d094042845707ffac?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0" alt="" width={45} />
                        </div> <br />

                      </form>
                    </div> : null
                  }
                </div>
              </div>
              <div>
                <Link to='/cart' className='header-two-two'><img src="https://th.bing.com/th/id/OIP.oiMmIHEwibGMFRa8BN5MDgHaHG?w=204&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='cart-img' /></Link>
              </div>

              <div>
                <img src="https://th.bing.com/th/id/OIP.cS82x4MNtHqtRkdDaOvyqAAAAA?w=137&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='header-search-icon' />
              </div>

            </div>
            <Routes>
              <Route path='/cart' element={<Cart />} />

            </Routes>
          </BrowserRouter>
        </div>

      </div>

      <h1 className='header-title'>I SHOP</h1>


      {/* routes to pages */}

      <div className='header-page-routes'>

        <BrowserRouter>

          <div className='header-menu'>

            <div className='header-div-page-link'><Link to='/' className='header-pages-link'>HOME</Link> </div>
            <div className='header-div-page-link'><Link to='/store' className='header-pages-link' onMouseOver={handdleover} onMouseLeave={handdleleave}>STORE</Link> </div>
            <div className='store-menu'>
              {!data ?
                <div>
                  <table className='store-table'>
                    <tbody>
                      <tr>
                        <th>Accessories</th>
                        <th></th>
                        <th>Category</th>
                        <th></th>
                        <th>Category</th>
                      </tr>
                      <tr>
                        <td>AirPord & Wireless</td>
                        <td>Camera & Video</td>
                        <td>Charging Device</td>
                        <td>Headphones</td>
                        <td>Mice & Keyboard</td>
                      </tr>
                      <tr>
                        <td>AppleCare</td>
                        <td>Cars & Travels</td>
                        <td>Connected Home</td>
                        <td>HealthKit</td>
                        <td>Music Creation</td>
                      </tr>
                      <tr>
                        <td>Bags,Shells & Sleeves</td>
                        <td>Cases & Films</td>
                        <td>Device Care</td>
                        <td></td>
                        <td>Networking & Server</td>
                      </tr>
                      <tr>
                        <td>Business & Security</td>
                        <td></td>
                        <td>Display & Graphic</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Cable & Docks</td>
                        <td></td>
                        <td>Fitness & Sports</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                : null}
            </div>
            <div className='header-div-page-link'><Link to='/store' className='header-pages-link'>IPHONE</Link> </div>
            <div className='header-div-page-link'><Link to='/store' className='header-pages-link'>IPAD</Link> </div>
            <div className='header-div-page-link'><Link to='/store' className='header-pages-link'>MACKBOOK</Link> </div>
            <div className='header-div-page-link'><Link to='/store' className='header-pages-link'>ACCESSORIES</Link> </div>
            <div className='line'></div>

          </div>




          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/iphone' element={<Iphone />} />
            <Route path='/ipad' element={<Ipad />} />
            <Route path='/store' element={<Store />} />
            <Route path='/accessories' element={<Acces />} />
            <Route path='/mackbood' element={<Mack />} />


          </Routes>



        </BrowserRouter>


      </div>



    </div>
  )
}

export default Header

