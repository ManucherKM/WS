import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Reservation from './pages/Reservation/Reservation'
import Search from './pages/Search/Search'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App