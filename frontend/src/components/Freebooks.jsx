import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';

function Freebooks() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book/");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);

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
            {book.map((item) => (
              <div key={item.id} aria-hidden="false">
                <Card item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebooks;