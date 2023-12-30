import React from "react";
import { Link } from "gatsby";

// Styles
import './NavBTN.styles.scss';

const NavBTN = ({
    navLink,
    navTitle,
    isActive
}) => (
    <div>
        {
            navLink.includes("mailto") ?
            <a href={navLink} className={isActive ? "active navBtn" : "navBtn"}>
                <p>{navTitle}</p>
            </a>
            :
            <Link to={navLink} className={isActive ? "active navBtn" : "navBtn"}>
                <p>{navTitle}</p>
            </Link>
        }
    </div>
)

export default NavBTN;