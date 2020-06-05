import React from "react";
import "./ProfileCard.css";
import CarouselComp from "../CarouselComp/CarouselComp/CarouselComp";

import Card from "../Card/Card";
import BtnLink from "../BtnLink/BtnLink";
import Text from "../Text/Text";
import Image from "../Image/Image";

const ProfileCard = ({
  title,
  text,
  imgSrc,
  imgAlt,
  linkText,
  onClick,
  children,
  linkPath,
  hiddenImg,
  hiddenText,
  hiddenCarousel,
  
}) => {
  return (
    <Card rounded shadow>
      <div className={hiddenImg ? "card-img-hidden" : "card-img"}>
        <Image
          width="100%"
          fit="cover"
          src={imgSrc}
          alt={imgAlt}
          hiddenImg={hiddenImg}
        />
      </div>

      <CarouselComp hiddenCarousel={hiddenCarousel} />

      <div className={hiddenText ? "card-content-hidden" : "card-content"}>
        {title && text ? (
          <>
            <Text title hiddenText={hiddenText}>
              {title}
            </Text>
            <Text hiddenText={hiddenText}>{text}</Text>
          </>
        ) : (
          children
        )}
      </div>

      <div className="card-actions">
        <BtnLink linkText={linkText} linkPath={linkPath} />
      </div>
    </Card>
  );
};

export default ProfileCard;
