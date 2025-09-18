import React, { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://i.pinimg.com/736x/6e/ac/2a/6eac2ae7668708f5c306d6030a557d78.jpg',
    alt: 'Stay',
    caption: 'Standard Room ',
    
  },
  {
    src: 'https://i.pinimg.com/1200x/5f/e7/a4/5fe7a4f5c21646f0fc110008d214bace.jpg',
    alt: 'Dine',
    caption: 'Dine',
  },
  {
    src: 'https://i.pinimg.com/1200x/c6/0b/68/c60b6878c4aa9ff5efca90ab975d249f.jpg',
    alt: 'Offers',
    caption: 'Offers',
  },
  {
    src: 'https://i.pinimg.com/1200x/e5/6e/3e/e56e3e200b8a7390627eed19f23254c4.jpg',
    alt: 'Stay',
    caption: 'Stay',
  },
  {
    src: 'https://i.pinimg.com/736x/d5/b7/12/d5b7128b2b04efa1b466ecc85597e830.jpg',
    alt: 'Dine',
    caption: 'Dine',
  },
  {
    src: 'https://i.pinimg.com/736x/90/e1/5b/90e15bbb7561edfad0f6a1eb36766194.jpg',
    alt: 'Offers',
    caption: 'Offers',
  },
];

export default function ResponsiveImageGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className='py-4 mt-9'>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <p
          style={{
            fontSize: 14,
            color: '#b39b6b',
            margin: 0,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Our Rooms
        </p>
        <h2 style={{ fontSize: 38, fontWeight: 'bold', marginTop: 6 }}>Accomodation</h2>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {images.map((img) => (
          <div
            key={img.alt + Math.random()} // to prevent key duplication
            onClick={() => openModal(img)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              flex: isMobile ? '1 1 100%' : '1 1 30%',
              maxWidth: isMobile ? '100%' : '32%',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <img
              src={img.src}
            //   alt={img.alt}
              style={{
                width: '100%',
                height: isMobile ? '250px' : '400px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Caption Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '10px 0',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '30px',
                textAlign: 'center',
                userSelect: 'none',
                background: 'linear-gradient(0deg, rgba(0,0,0,0.6), transparent)',
              }}
            >
              {img.caption}
              
            </div>
             
          </div>
        ))}
      </div>

      {modalOpen && currentImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
           backgroundColor: 'rgba(187, 142, 28, 0.7)', // golden with 70% opacity
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'transparent',
              border: 'none',
              fontSize: '32px',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 1001,
            }}
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Modal Image */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            style={{
              maxHeight: '90%',
              maxWidth: '90%',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(255,255,255,0.2)',
            }}
          />
        </div>
      )}
    </div>
  );
}
