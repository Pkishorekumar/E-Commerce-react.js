import React from 'react'
import './Slider.css'
import { sliderdata } from '.././API-data/slider'
import Carousel from 'better-react-carousel'

export const Slider = () => {
    return (
        <div>
            <h2 className='slider-head'>FEATURED PRODUCTS</h2>
            <hr />
            {/* <div className='slider-container'>
                {sliderdata.map(item =>
                    <div key={item.id} className='slider-data'>
                        <div className='slider-img-div'>
                            <img src={item.url} alt="" className='slider-img' />
                        </div>

                        <div className='slider-caption'>
                            <h3>{item.name}</h3>
                            <h5>{item.oldprice}</h5>
                            <h5>{item.newprice}</h5>
                        </div>
                    </div>
                )

                }
            </div> */}

            <div className='slider-container'>
                <Carousel cols={3} rows={1} gap={10} loop>
                    {sliderdata.map(item =>
                        <Carousel.Item>

                            <div key={item.id} className='slider-data'>
                                <div className='slider-img-div'>
                                    <img src={item.url} alt="" className='slider-img' />
                                </div>

                                <div className='slider-caption'>
                                    <h3>{item.name}</h3>
                                    <h5 className='oldprice'>{item.oldprice}</h5>
                                    <h5 className='newprice'>{item.newprice}</h5>
                                </div>
                            </div>
                        </Carousel.Item>
                    )

                    }
                </Carousel>
            </div>




        </div>
    )
}
