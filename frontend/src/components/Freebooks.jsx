import React from 'react';
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';


function Freebooks() {
    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-6 mb-16 z-0'>
            <h1 className='font-semibold text-xl'>
              Free Resources to Fuel Your Growth
            </h1>
            <p>
              Learning never stops, and neither should you! Dive into our collection of free resources designed to spark curiosity, inspire creativity, and help you grow. Whether you're exploring a new skill or deepening your knowledge, these handpicked materials are here to guide you every step of the way. Stay curious, stay inspired, and let’s grow together!
            </p>
        
          <div className="slider-container">
            <Slider {...settings} className='space-x-12'>
              {filterData.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
    </>
  )
}

export default Freebooks