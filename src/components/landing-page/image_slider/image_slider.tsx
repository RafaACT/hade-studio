import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      <IconButton className="buttons" onClick={previousImage}>
        <ArrowBackIosIcon />
      </IconButton>
      <img src={images[currentImageIndex]} alt="" className="image"/>
      <IconButton className="buttons" onClick={nextImage}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default ImageSlider;