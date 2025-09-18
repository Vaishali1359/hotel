import React from 'react'
import Home from '../src/Compnents/Home/Home'
import Navbar from './Compnents/Navbar/Navbar'
import Home2 from './Compnents/Home/Home2'
import FeedbackSlider from './Compnents/Home/FeedbackSlider'
import Footer from './Compnents/Navbar/Footer'
import RoomGallery from './Compnents/Home/RoomGallery'
import Instaroom from './Compnents/Home/Instaroom'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Home2 />
      <FeedbackSlider />
      <RoomGallery />
      <Instaroom />

      <Footer />
    </div>
  )
}

export default App