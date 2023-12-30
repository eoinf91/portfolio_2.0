import React from "react";

// Styles
import './FolioBTN.styles.scss';

// Images
import Figma from '../../images/figma_logo.svg';

const FolioBTN = ({
    linkURL
}) => (
    <a href={linkURL} className="foliobtn_link" target="_blank" rel="noopener noreferrer">
        {
            linkURL.includes("figma") ?
            <div className="flex">
                <img src={Figma} alt="Figma" />
                <p>Figma Link</p>
            </div>
            :
            <div className="flex">
                <p>Prototype Link</p>
            </div>
        }
    </a>
)

export default FolioBTN;