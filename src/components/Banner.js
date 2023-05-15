import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner(props) {
  return (
    <div className='relative w-[80rem] mx-auto '>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={2000}>
          {props.products.slice(0,20).map(({image})=>{

            return (

              <div className='w-full h-[50rem]'>
            <img loading='lazy' src={image} className='w-full h-full object-contain' />
        </div>
              )
        })}
    
        </Carousel>
    </div>
  )
}

export default Banner