import React from 'react'
import { Route, Routes } from "react-router-dom"
import { useSelector } from 'react-redux'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Reservation from './pages/Reservation/Reservation'
import Search from './pages/Search/Search'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  // const state = useSelector(state => state);
  // const resState = JSON.parse(localStorage.getItem("state"));
  // localStorage.setItem("state", JSON.stringify(state))
  // console.log(resState);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App