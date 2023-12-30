import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

// styles
import './ImageGrid.styles.scss';


const ImageGrid = ({
    gridImage01, gridImage02, gridImage03
}) => (
    <div className="image-grid">
        <GatsbyImage className="prod-image" image={gridImage01} />
        <GatsbyImage className="prod-image" image={gridImage02} />
        <GatsbyImage className="prod-image" image={gridImage03} />
    </div>
)

export default ImageGrid;