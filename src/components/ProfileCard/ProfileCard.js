import React from "react";
import "./ProfileCard.css";

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
}) => {
  return (
    <Card rounded shadow>
      <div className="card-img">
        <Image width="100%" fit="cover" src={imgSrc} alt={imgAlt} />
      </div>

      <div className="card-content">
        {title && text ? (
          <>
            <Text title>{title}</Text>
            <Text>{text}</Text>
          </>
        ) : (
          children
        )}
      </div>

      <div className="card-actions">
        <BtnLink linkText={linkText} linkPath={linkPath}/>
      </div>
    </Card>
  );
};

export default ProfileCard;
