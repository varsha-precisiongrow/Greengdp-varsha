import React, { useState } from 'react';
import './Imageslider.css';  // Import the CSS file
import banner1 from '../../../asset/banner1.webp'
import banner2 from '../../../asset/banner2.webp'
import banner3 from '../../../asset/banner3.webp'

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const images = [
    { src: banner1, type: 'Green GDP' },
    { src: banner2, type: 'Green GDP' },
    { src: banner3, type: 'Green GDP' },
  ];



  // Next button click handler
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setAnimationClass('next');
    setCurrentIndex(nextIndex);
  };

  // Prev button click handler
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setAnimationClass('prev');
    setCurrentIndex(prevIndex);
  };



  
  return (
   <>
   <div className='container-fixed'>
   <div className={`slider ${animationClass}`}>
      <div className="list">
        {images.map((image, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.type} />
            <div className="content">
           
              <div className="type">{image.type}</div>
              <div className="description">
                <p>The Green Gross Domestic Product, or Green GDP, is a way to measure how a country's economy is growing while also looking at its impact on the environment.It's like the regular GDP, but it includes things like how much biodiversity is being lost and how much it's costing to deal with climate change.</p>
              </div>
              <div className="outer-button">
                <button className="inner-button">Start Your Green GDP Journey</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    

      <div className="nextPrevArrows">
        <button className="prev" onClick={handlePrev}> 
          <i className="fa-sharp fa-solid fa-backward"></i> 
        </button>
        <button className="next" onClick={handleNext}> 
          <i className="fa-sharp fa-solid fa-forward"></i> 
        </button>
      </div>
    </div>
   </div>
   </>
  );
};

export default Imageslider;
