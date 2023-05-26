import React from 'react'
import RatingStars from 'react-rating-stars-component';
import { Headphonesdata } from '../Store-API/Headphones';
import './Storelist.css'



export const Headphones = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className='main-container'>
            <div className='products'>
                <div className='product-container'>
                    {Headphonesdata.map(item =>

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
                                <h4 className='all-name'>{item.title}</h4>
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
        </div>
    )
}
