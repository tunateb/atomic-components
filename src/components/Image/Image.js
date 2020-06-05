import React from 'react';
import './Image.css';

const Image = ({ src, alt, width='auto', height='auto', fit='cover', avatar=false, rounded=false, circle=false, hiddenImg=false }) => {
  const imgClasses= `
    img 
    ${avatar ? 'img-avatar' : ''} 
    ${rounded ? 'img-rounded' : ''} 
    ${circle ? 'img-circle' : ''}
    ${hiddenImg ? 'img-hidden': ""}
    object-${fit}
  `;

  return (
    <img style={{ width: width, height: height }} className={imgClasses} src={src} alt={alt} />
  )
}

export default Image