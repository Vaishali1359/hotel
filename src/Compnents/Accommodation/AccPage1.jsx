import React, { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 220,
    description:
      "Continually productize compelling quality packed slated productize compelling quality.",
    image:
      "https://i.pinimg.com/1200x/59/55/1e/59551e26574e326184d37f4ac02a07c8.jpg",
    features: [
      { icon: "👤", label: "4 Person" },
      { icon: "📐", label: "28 Sqm" },
      { icon: "📶", label: "Free WiFi Zone" },
      { icon: "🛏️", label: "King Size Bed" },
      { icon: "🚿", label: "Shower" },
      { icon: "🍳", label: "Breakfast" },
    ],
  },
  {
    id: 2,
    name: "Single Room",
    price: 220,
    description:
      "Continually productize compelling quality packed slated productize compelling quality.",
    image:
      "https://i.pinimg.com/736x/ed/bb/e7/edbbe7f134ccd2f5a8f096c25b3b84c9.jpg",
    features: [
      { icon: "👤", label: "4 Person" },
      { icon: "📐", label: "28 Sqm" },
      { icon: "📶", label: "Free WiFi Zone" },
      { icon: "🛏️", label: "King Size Bed" },
      { icon: "🚿", label: "Shower" },
      { icon: "🍳", label: "Breakfast" },
    ],
  },
  {
    id: 3,
    name: "Cupule Room",
    price: 220,
    description:
      "Continually productize compelling quality packed slated productize compelling quality.",
    image:
      "https://i.pinimg.com/1200x/a9/58/9b/a9589b46a97bca4ecb00dd816c971cc4.jpg",
    features: [
      { icon: "👤", label: "4 Person" },
      { icon: "📐", label: "28 Sqm" },
      { icon: "📶", label: "Free WiFi Zone" },
      { icon: "🛏️", label: "King Size Bed" },
      { icon: "🚿", label: "Shower" },
      { icon: "🍳", label: "Breakfast" },
    ],
  },
  {
    id: 4,
    name: "Standard Room",
    price: 220,
    description:
      "Continually productize compelling quality packed slated productize compelling quality.",
    image:
      "https://i.pinimg.com/736x/62/b7/e1/62b7e1aab433b1fb4cfc0b0cb0489370.jpg",
    features: [
      { icon: "👤", label: "4 Person" },
      { icon: "📐", label: "28 Sqm" },
      { icon: "📶", label: "Free WiFi Zone" },
      { icon: "🛏️", label: "King Size Bed" },
      { icon: "🚿", label: "Shower" },
      { icon: "🍳", label: "Breakfast" },
    ],
  },
];

const RoomCard = ({ room, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        src={room.image}
        alt={room.name}
        className="rounded-lg shadow-lg w-full md:w-1/2 h-64 object-cover"
        draggable={false}
      />
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between w-full md:w-1/2 -mt-16 md:mt-0 md:-ml-16 md:pr-10">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex space-x-1 text-yellow-400 text-sm">
              {/* 5 stars */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-yellow-600 font-semibold text-lg">${room.price}</p>
          </div>
          <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{room.description}</p>

          <div className="grid grid-cols-3 gap-4 text-gray-700 text-xs">
            {room.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-lg">{feature.icon}</span>
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-6 py-2 mt-6 font-semibold shadow-md w-full md:w-auto transition-colors">
          BOOKING NOW
        </button>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onChange }) => {
  return (
    <div className="flex justify-center gap-4 mt-12">
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`w-9 h-9 rounded-full border-2 transition-colors ${
              isActive
                ? "bg-yellow-500 border-yellow-500 text-white"
                : "border-gray-300 text-gray-700 hover:bg-yellow-100"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

const AccPage1 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Assuming 2 rooms per page for demo
  const roomsPerPage = 2;
  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  const currentRooms = rooms.slice(
    (currentPage - 1) * roomsPerPage,
    currentPage * roomsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        {/* Header section */}
        <div className="relative h-56 rounded-lg overflow-hidden shadow-lg mb-8">
          <img
            src="https://i.pinimg.com/736x/bb/0c/ef/bb0cef48ffb5fe34142206ee363dce6b.jpg"
            alt="Hotel Room Header"
            className="w-full h-full object-cover brightness-75"
            draggable={false}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-semibold mb-2">Rooms Listing 2</h1>
            <p className="text-sm opacity-80">Home / Rooms Listing 2</p>
          </div>
        </div>

        {/* Search/filter bar */}
        <div className="bg-white rounded-md shadow-md p-4 flex flex-wrap gap-3 items-center justify-center mb-16">
          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" defaultValue="">
            <option value="" disabled>
              Check In
            </option>
            <option>01 Jan 2023</option>
            <option>02 Jan 2023</option>
            <option>03 Jan 2023</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" defaultValue="">
            <option value="" disabled>
              Check Out
            </option>
            <option>05 Jan 2023</option>
            <option>06 Jan 2023</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" defaultValue="">
            <option value="" disabled>
              Adult
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" defaultValue="">
            <option value="" disabled>
              Children
            </option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" defaultValue="">
            <option value="" disabled>
              Room
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded shadow transition">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>

      {/* Room listings */}
      <div className="flex flex-col gap-24">
        {currentRooms.map((room, index) => (
          <RoomCard
            key={room.id}
            room={room}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      />
    </div>
  );
};

export default AccPage1;
