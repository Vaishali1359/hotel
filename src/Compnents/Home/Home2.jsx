import React, { useState, useEffect } from 'react';

import A from '../img/home2A.png'
import B from '../img/home2B.png'
import C from '../img/home3C.png'

const images = [
  {
    src: A,
    alt: 'Stay',
    caption: 'Stay',
  },
  {
    src: B,
    alt: 'Dine',
    caption: 'Dine',
  },
  {
    src: C,
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
            key={img.alt}
            onClick={() => openModal(img)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              flex: isMobile ? '1 1 100%' : '1 1 30%',
              maxWidth: isMobile ? '100%' : '32%',
              position: 'relative',  // needed for caption overlay
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
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
                // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '18px',
                textAlign: 'center',
                userSelect: 'none',
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
            backgroundColor: 'rgba(0,0,0,0.7)',
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

          {/* Image */}
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
