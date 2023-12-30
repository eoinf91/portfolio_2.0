import React from "react";

// Styles
import './Footer.styles.scss';

const Footer = () => (
    <footer>
        <div className="col">
            <p className="fs16">
                &copy; {new Date().getFullYear()} Eoin Feely
            </p>
        </div>
        <div className="col">
            <p className="bold fs16 secondaryBeige mxb16">On the web</p>
            <a className="mxb4" href="https://www.linkedin.com/in/eoinbfeely/" target="_blank" rel="noopener noreferrer">
                <p className="fs16">LinkedIn</p>
            </a>
            <a href="https://www.icloud.com/iclouddrive/048_L9IHb_IE949mzEnE0QLIg#eoin%5Ffeely%5Fdesigner%5Fresume" target="_blank" rel="noopener noreferrer" className="mxb4" to="/">
                <p className="fs16">Resume</p>
            </a>
            <a className="mxb4" href="https://www.instagram.com/eoin_feely/" target="_blank" rel="noopener noreferrer">
                <p className="fs16">Instagram</p>
            </a>
        </div>
    </footer>
)

export default Footer;