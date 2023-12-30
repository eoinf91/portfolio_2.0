import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"

// Styles
import "./featureImage.styles.scss";

const FeatureImage = ({
    prodImage
}) => (
    <GatsbyImage className="feature-image" image={prodImage} />
)

export default FeatureImage;