import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our hotel! We are committed to offering our guests the best possible experience,
          combining comfort, quality, and personalized service.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Whether you're here for business or leisure, our team is here to make your stay memorable. 
          Explore our amenities, enjoy fine dining, and relax in our luxurious rooms.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Thank you for choosing us. We look forward to welcoming you!
        </p>
      </div>
    </div>
  );
};

export default About;
