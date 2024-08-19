import React from 'react'
import { BrowserRouter ,Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './components/login/login'
import SignupPage from './components/signup/Signup';
import Home from './components/home/Home';
import AboutUs from './components/home/Aboutus';
import Ecommerce from './components/ecommerce/Ecommerce';
const App = () => {
  return (
    <Routes>
      <Route path='/signin' element={<Login />}/>
      <Route path='/' element={<SignupPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/ecommerce' element={<Ecommerce />} />
    </Routes>
  )
}

export default App