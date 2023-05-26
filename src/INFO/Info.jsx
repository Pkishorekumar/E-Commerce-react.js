import React from 'react'
import './Info.css'

export const Info = () => {
    return (
        <div className='info-container'>
            <div>
                <h2 className='info-ishop'>I SHOP</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing <br />
                    and typesetting industry. Lorem Ipsum has been

                </p>
            </div>
            <div>
                <h3>Follow Us</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing <br />
                    and typesetting industry. Lorem Ipsum has been
                </p>
                <img src="https://th.bing.com/th/id/OIP.tozpIBHbVCdArjene99JiAD5D6?w=192&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={20} height={20} /> &nbsp;&nbsp;
                <img src="https://th.bing.com/th/id/OIP.1PhXG_4NLoBd-AdVO5DD7QHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={20} height={20} />
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>
                    iShop: address @building 124 <br /> Call us now: 0123-456-789 <br /> Email: support@whatever.com
                </p>
            </div>
        </div>
    )
}
