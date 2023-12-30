import React from "react";

// Styles
import './Chip.styles.scss';

// Images
import LocationSVG from '../../images/location.svg';

const Chip = () => (
    <div className="chip">
        <img src={LocationSVG} alt="Location" />
        <p>Tallinn, Estonia</p>
    </div>
)

export default Chip;