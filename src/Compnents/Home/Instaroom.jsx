import React from "react";

const InstagramSection = () => {
  const images = [
    "https://i.pinimg.com/1200x/61/7f/7c/617f7c6da36595b1e0727ecc8872d1de.jpg",
    "https://i.pinimg.com/736x/2d/51/9e/2d519e5ac890c45da9d8064e458ccb30.jpg",
    "https://i.pinimg.com/736x/dd/fd/e0/ddfde028425104e78476b6be848607c2.jpg",
    "https://i.pinimg.com/736x/b4/21/d9/b421d95a23c63dcdc591d797c2200ec4.jpg",
    "https://i.pinimg.com/736x/a8/8a/13/a88a13aab3eb3ccbee3681c85807bf19.jpg",
    "https://i.pinimg.com/736x/65/99/5f/65995f7282622d40a5f5f54553d1bba3.jpg",
    "https://i.pinimg.com/736x/0f/50/d2/0f50d284e0b1427b6cca988b78dc67bc.jpg",
    "https://i.pinimg.com/736x/d7/dd/29/d7dd29f2d5977755b5f1bc34df9ca275.jpg",
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Top Heading */}
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          Our Instagram
        </p>
        <h2 className="text-3xl font-bold mb-8">@almaris_hotel_theme</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded"
            >
              <img
                src={src}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                {/* Instagram Icon (SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.253 2.243 1.314 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.243 1.253-3.608 1.314-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.253-2.243-1.314-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.243-1.253 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.014 7.052.072 5.773.13 4.56.428 3.468 1.52 2.376 2.612 2.078 3.825 2.02 5.104.964 8.332.964 15.668 2.02 18.896c.058 1.28.356 2.493 1.448 3.585 1.092 1.092 2.305 1.39 3.585 1.448 3.228 1.056 10.564 1.056 13.792 0 1.28-.058 2.493-.356 3.585-1.448 1.092-1.092 1.39-2.305 1.448-3.585 1.056-3.228 1.056-10.564 0-13.792-.058-1.28-.356-2.493-1.448-3.585C19.393.428 18.18.13 16.9.072 15.62.014 15.216 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
