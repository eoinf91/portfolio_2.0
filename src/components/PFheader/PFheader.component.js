import React from "react";

// Styles
import './PFheader.styles.scss';

// Components
import Nav from '../Nav/Nav.component';
import Chip from "../Chip/Chip.component";

const PFheader = ({pagePath}) => (
    <header>
        <Nav 
            pagePath={pagePath}
        />
        <Chip />
    </header>
)

export default PFheader;