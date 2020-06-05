import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

class DetailsLayout extends React.Component {
    render() {
        return (
            <ProfileCard linkText="Go Back" linkPath = "films"/>
        )
    }
}

export default DetailsLayout;