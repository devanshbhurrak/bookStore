import React from 'react';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Courses from './pages/Courses';
import Signup from './components/Signup';
import Contact from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course' element={<Courses />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App