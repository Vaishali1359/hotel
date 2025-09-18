import React, { useState, useEffect } from "react";

const feedbacks = [
  {
    message:
      "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
    author: "Donette Fondren",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/b3/2e/70/b32e7095cb2036846a07d05e6d6cf975.jpg",
  },
  {
    message:
      "From the warm welcome to the beautifully designed rooms, this hotel redefines comfort. A must-visit!",
    author: "Alex Morgan",
    rating: 4,
    image:
      "https://i.pinimg.com/1200x/3a/0e/2f/3a0e2f50782f3c774379c9bc69e9c723.jpg",
  },
  {
    message:
      "Truly an unforgettable experience. The attention to detail and personalized service is unmatched.",
    author: "Priya Desai",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/fe/77/3f/fe773fad12a0c506a057f5005b6016d3.jpg",
  },
];

export default function FeedbackSlider() {
  // State to keep track of which feedback is showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // This effect will auto-advance the slider every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next slide or go back to first if at the end
      setCurrentIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    // interval
    return () => clearInterval(timer);
  }, []);

  // When user clicks on a dot, jump to that feedback index
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Grab current feedback to display
  const currentFeedback = feedbacks[currentIndex];

  return (
    <div
      style={{
        position: "relative",
        height: "420px",
        color: "white",
        backgroundImage: `url(${currentFeedback.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        textAlign: "center",
        transition: "background-image 0.8s ease-in-out",
      }}
    >
      {/* Dark overlay to make text readable */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* Content container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "750px",
          margin: "0 auto",
        }}
      >
        {/* Stars */}
        <div style={{ marginBottom: 12 }}>
          {[...Array(currentFeedback.rating)].map((_, i) => (
            <span key={i} style={{ color: "#f5c518", fontSize: 22 }}>
              ★
            </span>
          ))}
        </div>

        {/* Feedback message */}
        <p
          style={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: 1.5,
            marginBottom: 20,
          }}
        >
          {currentFeedback.message}
        </p>

        {/* Author name */}
        <p style={{ fontSize: 16, fontStyle: "italic", color: "#ccc" }}>
          {currentFeedback.author}
        </p>

        {/* Pagination dots */}
        <div style={{ marginTop: 25 }}>
          {feedbacks.map((_, idx) => (
            <span
              key={idx}
              onClick={() => handleDotClick(idx)}
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                margin: "0 6px",
                borderRadius: "50%",
                backgroundColor: idx === currentIndex ? "#fff" : "#888",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
