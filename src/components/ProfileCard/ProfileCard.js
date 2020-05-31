import React from 'react';
import './ProfileCard.css';

import Card from '../Card/Card';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Image from '../Image/Image';

const ProfileCard = ({ title, text, buttonText, onButtonClick, imgSrc, imgAlt, children }) => {
  return (
    <Card rounded shadow>
      <div className="card-img">
        <Image width="100%" fit="cover" src={imgSrc} alt={imgAlt} />
      </div>

      <div className="card-content">
        {
          title && text ? 
          (
            <>
              <Text title>{title}</Text>
              <Text>{text}</Text>
            </>
          ) : 
          
          children
        }
      </div>

      <div className="card-actions">
        <Button onClick={onButtonClick} color="red">{buttonText}</Button>
      </div>
    </Card>
  )
}

export default ProfileCard;