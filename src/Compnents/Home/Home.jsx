import React, { useState } from "react";
import HERO from "../img/back.png"; 

export default function AlmarisLanding() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* 🖼️ Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0  bg-black/40" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-white font-semibold mb-6 text-center whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Dream Stay
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl">
            The perfect getaway is just a click away. Book now and start your adventure!
          </p>
        </div>
      </section>

      {/* 🏨 Reservation Bar */}
      <section className="relative -mt-48 z-30 flex justify-center px-4">
        <div
          className=" bg-white/40 rounded-lg shadow-xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ width: "80%", margin: "20px auto" }}
        >
          {/* Reservation Title */}
          <span className="font-bold text-xl  text-white  text-center md:text-left w-full md:w-auto">
            Reservation
          </span>

          {/* Choose Date */}
          <div className="w-full md:w-auto">
            <label className="block text-xs text-white ml-6 font-semibold  mb-1">
              Choose Date
            </label>
            <input
              type="text"
              value="Aug 14 - Aug 15"
              className=" rounded px-3  text-white py-2 w-full"
              readOnly
            />
          </div>

          {/* Adults Selector */}
          <div className="w-full md:w-auto text-white ">
            <label className="block text-xs font-semibold ml-7 text-white  mb-1">
              Adult
            </label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="px-3 py-1 bg-[#bb8e1c] text-white  rounded font-bold"
              >
                -
              </button>
              <span className="font-medium">{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="px-3 text-white  py-1 bg-[#bb8e1c] rounded font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Children Selector */}
          <div className="w-full md:w-auto">
            <label className="block text-xs font-semibold ml-5 text-white mb-1">
              Children
            </label>
            <div className="flex items-center text-white  space-x-3">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="px-3 text-white  py-1 bg-[#bb8e1c] rounded font-bold"
              >
                -
              </button>
              <span className="font-medium">{children}</span>
              <button
                onClick={() => setChildren(children + 1)}
                className="px-3 text-white   py-1 bg-[#bb8e1c] rounded font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Check Button */}
          <div className="w-full md:w-auto text-center md:text-left">
            <button className="bg-[#bb8e1c] text-white rounded-lg px-6 py-2 font-semibold w-full md:w-auto">
              Check Availability
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
