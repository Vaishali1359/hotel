import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './Compnents/Home/Home';
import Home2 from './Compnents/Home/Home2';
import FeedbackSlider from './Compnents/Home/FeedbackSlider';
import Footer from './Compnents/Navbar/Footer';
import RoomGallery from './Compnents/Home/RoomGallery';
import Instaroom from './Compnents/Home/Instaroom';
import Navbar from './Compnents/Navbar/Navbar';
import About from './Compnents/About';
import AccPage1 from './Compnents/Accommodation/AccPage1';
import AdminPanel from './Compnents/DashBoard/AdminPanel';
import AdminRoomManager from './Compnents/Accommodation/AdminRoomManager';
// import Login from './pages/Login'; // Your login component
// import PrivateRoute from './utils/PrivateRoute'; // Custom route protection
import Login from './Compnents/DashBoard/Login';
import PrivateRoute from './Compnents/DashBoard/PrivateRoute';
import Signup from './Compnents/DashBoard/Signup';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state

  return (
    <div>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Home2 />
                  <FeedbackSlider />
                  <RoomGallery />
                  <Instaroom />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/accomandation" element={<AccPage1 />} />
            <Route path="/rooms" element={<AdminRoomManager />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
