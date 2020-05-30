import React from 'react';
import './Image.css';

const Image = ({ src, alt, avatar=false, rounded=false, circle=false }) => {
  const imgClasses= `img ${avatar ? 'img-avatar' : ''} ${rounded ? 'img-rounded' : ''} ${circle ? 'img-circle' : ''}`;

  return (
    <img className={imgClasses} src={src} alt={alt} />
  )
}

export default Image