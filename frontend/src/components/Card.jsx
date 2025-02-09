import React from 'react'

function Card({item}) {
  return (
    <>
        <div>
            <div className="card bg-base-100 max-w-96 h-[550px] hover:scale-105 
            shadow-xl my-12 mr-6 transition-all duration-300
            dark:bg-gray-900 dark:text-gray-200 ">
                <figure>
                    <img
                    src={item.image}
                    alt="Shoes" className='w-full h-[310px]'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge-secondary py-1 px-2 leading-[1.2] rounded-xl text-[15px] font-thin">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                    <div className="badge badge-outline p-4">₹{item.price}</div>
                    <div className="badge badge-outline cursor-pointer p-4 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;