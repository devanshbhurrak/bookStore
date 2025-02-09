import React from 'react'

function Contact() {
  return (
    <>
        <div className='max-w-screen-lg min-h-screen mx-auto p-8 pt-24'>
        <h1 className='text-3xl font-semibold text-center text-pink-500'>Contact Us</h1>
        <p className='text-center mt-2 text-gray-600'>We'd love to hear from you. Reach out to us with any inquiries or feedback.</p>
        
        <div className='mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
          <form className='grid grid-cols-1 gap-4'>
            <label className='block'>
              <span className='text-gray-700 dark:text-gray-200'>Name</span>
              <input type='text' className='w-full mt-1 p-2 border rounded-md dark:bg-gray-700' placeholder='Your Name' required />
            </label>

            <label className='block'>
              <span className='text-gray-700 dark:text-gray-200'>Email</span>
              <input type='email' className='w-full mt-1 p-2 border rounded-md dark:bg-gray-700' placeholder='Your Email' required />
            </label>

            <label className='block'>
              <span className='text-gray-700 dark:text-gray-200'>Message</span>
              <textarea className='w-full mt-1 p-2 border rounded-md dark:bg-gray-700' rows='4' placeholder='Your Message' required></textarea>
            </label>

            <button type='submit' className='w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-700 duration-300'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact