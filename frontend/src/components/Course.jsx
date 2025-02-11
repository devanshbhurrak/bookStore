import React, {useEffect} from 'react';
import { useState } from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Course() {
  const [book, setBook] = useState([]);
  useEffect(()=> {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:4001/book/");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook(); 
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 p-32'>
        <div className='text-center'>
          <h1 className='mx-auto text-2xl font-semibold md:text-4xl'>
          Welcome to Your  <span className='text-pink-500'>Learning Journey!</span>
          </h1>
          <p className='py-8'>
          Whether you're just starting out or looking to advance your skills, we're here to guide you every step of the way. Dive into our curated courses and take the next step toward achieving your goals.
          </p>
          <Link to='/'>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          {
            book.map((item => (
              <Card item={item} key={item.id}/>
            )))
          }
        </div>
      </div>
    </>
  )
}

export default Course