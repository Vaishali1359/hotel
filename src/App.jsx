import React from 'react'
import Home from '../src/Compnents/Home/Home'
import Navbar from './Compnents/Navbar/Navbar'
import Home2 from './Compnents/Home/Home2'
import FeedbackSlider from './Compnents/Home/FeedbackSlider'
import Footer from './Compnents/Navbar/Footer'
import RoomGallery from './Compnents/Home/RoomGallery'
import Instaroom from './Compnents/Home/Instaroom'
import { Route, Routes } from 'react-router-dom'
import About from './Compnents/About'
import AccPage1 from './Compnents/Accommodation/AccPage1'
import AdminPanel from './Compnents/DashBoard/AdminPanel'
import AdminRoomManager from './Compnents/Accommodation/AdminRoomManager'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={
        <>
          <Home />
          <Home2 />
          <FeedbackSlider />
          <RoomGallery />
          <Instaroom />
        </>
      }/>
      <Route path="/about" element={<About />} />
      <Route path="/accomandation" element={<AccPage1 />} />
      <Route path='/rooms' element={<AdminRoomManager />} />
      <Route path="/admin" element={<AdminPanel />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App