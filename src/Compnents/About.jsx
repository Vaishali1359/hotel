import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    text: "Amazing stay! The staff was very friendly and the rooms were luxurious.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Lee",
    text: "Beautiful hotel with excellent amenities. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    text: "Perfect location and wonderful dining options. Will visit again.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const branches = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    name: "Downtown Branch",
    cost: "$250/night",
  },
  {
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    name: "Beachside Branch",
    cost: "$300/night",
  },
  {
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    name: "Mountain Branch",
    cost: "$200/night",
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    name: "Airport Branch",
    cost: "$220/night",
  },
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // Override slick dots color for golden
    appendDots: dots => (
      <ul style={{ margin: "0px", color: "#D4AF37" }}> {dots} </ul>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#D4AF37",
          opacity: 0.6,
        }}
      />
    ),
  };

  return (
    <div className="bg-white min-h-screen text-gray-200 px-6 md:px-20 py-16">

      {/* About Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#D4AF37]">About Our Company</h2>
          <p className="text-lg leading-relaxed mb-4 text-black">
            Welcome to our hotel group, where hospitality meets excellence. With multiple branches in prime locations, we ensure every guest experiences comfort, luxury, and personalized service.
          </p>
          <p className="text-lg leading-relaxed text-black">
            Our mission is to provide memorable stays tailored to your needs, whether you are traveling for business or leisure. Discover our exquisite rooms, dining, and wellness options designed for your ultimate satisfaction.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Hotel Interior"
            className="rounded-lg shadow-lg w-full object-cover max-h-96 border-4 border-[#D4AF37]"
          />
        </div>
      </section>

      {/* Branches Section */}
      <section className="max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {branches.map(({ img, name, cost }, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden hover:shadow-[0_0_25px_#D4AF37] transition-shadow cursor-pointer max-w-full"
            style={{ minWidth: "340px" }}
          >
            <img src={img} alt={name} className="w-full h-72 object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-3 text-[#D4AF37]">{name}</h4>
              <p className="font-semibold text-xl text-yellow-400">{cost}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto py-4 mt-6 mb-24">
        <h3 className="text-3xl font-semibold mb-1 text-center text-[#D4AF37]">What Our Guests Say</h3>
        <p className="text-center text-gray-400 mb-10">Hear from our happy customers who loved their stay</p>

        <Slider {...sliderSettings}>
          {testimonials.map(({ name, text, img }, index) => (
            <div key={index} className="px-6">
              <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-center flex flex-col items-center space-y-6">
                <img 
                  src={img} 
                  alt={name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#D4AF37] shadow-md" 
                />
                <p className="text-yellow-300 italic">&quot;{text}&quot;</p>
                <h4 className="font-semibold text-lg text-yellow-400">{name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </section>

    </div>
  );
};

export default About;
