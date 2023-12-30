import React from "react";
import './Nav.styles.scss';

// Components
import NavBTN from "../NavBTN/NavBTN.component";

const Nav = ({pagePath}) => (
    <nav>
        {
            pagePath === "/" 
            ? 
            <NavBTN
                navLink = "/"
                navTitle = "Home"
                isActive
            />
            :
            <NavBTN
                navLink = "/"
                navTitle = "Home"
            />
        }
        {
            pagePath.includes("/work/")
            ? 
            <NavBTN
                navLink = "/work"
                navTitle = "Work"
                isActive
            />
            :
            <NavBTN
                navLink = "/work"
                navTitle = "Work"
            />
        }
        {
            pagePath.includes("/contact/")
            ? 
            <NavBTN
                navLink = "/"
                navTitle = "Contact"
                isActive
            />
            :
            <NavBTN
                navLink = "mailto:me@eoinfeely.com"
                navTitle = "Contact"
            />
        }
    </nav>
)

export default Nav;