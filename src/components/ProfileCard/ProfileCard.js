import React from 'react';
import './ProfileCard.css';

import Card from '../Card/Card';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Image from '../Image/Image';

const ProfileCard = ({ title, text, buttonText, onButtonClick, imgSrc, imgAlt }) => {
  return (
    <Card rounded shadow>
      <Image src={imgSrc} alt={imgAlt} />

      <Text>{title}</Text>
      <Text>{text}</Text>

      <div>
        <Button onClick={onButtonClick} color="red">{buttonText}</Button>
      </div>
    </Card>
  )
}

export default ProfileCard;