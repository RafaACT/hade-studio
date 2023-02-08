import React, { useState } from "react";

const ImageSlider = ({ images }:any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  return (
    <div className="image-slider">
      <button className="previous" onClick={previousImage}>
        Previous
      </button>
      <img src={images[currentImageIndex]} alt="" className="image"/>
      <button className="next" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;