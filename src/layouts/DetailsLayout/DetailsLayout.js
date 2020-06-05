import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";


class DetailsLayout extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <ProfileCard linkText="Go Back" linkPath="films" hiddenImg hiddenText>
          
        </ProfileCard>
      </div>
    );
  }
}

export default DetailsLayout;
