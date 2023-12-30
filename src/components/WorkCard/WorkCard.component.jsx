import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";

// Styles
import "./WorkCard.styles.scss";

const WorkCard = ({
    workImage,
    companyName,
    projectTitle,
    projectLink,
}) => {
    const location = useLocation();

    return (
    <Link to={
        location.pathname.includes("work") ? "/work"+projectLink : "work"+projectLink
        } 
        className="workCard">
        <GatsbyImage className="image" image={workImage} />
        <div className="content">
            <p className="fs16 uppercase">{companyName}</p>
            <h4>{projectTitle}</h4>
        </div>
    </Link>
)}

export default WorkCard;