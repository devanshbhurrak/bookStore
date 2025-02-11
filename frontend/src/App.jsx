import React from 'react';
import Home from './pages/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import Courses from './pages/Courses';
import Signup from './components/Signup';
import Contact from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-gray-800 dark:text-gray-100' data-theme="light">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup"/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App