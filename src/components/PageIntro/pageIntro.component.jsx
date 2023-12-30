import React from "react";

// Styles
import "./pageIntro.styles.scss";

const PageIntro = ({
    introHeader,
    introSubheader,
    introPara,
}) => (
    <div className="page-intro">
        <h1 className="mxb16">{introHeader}</h1>
        <h2 className="mxb16">{introSubheader}</h2>
        <p className="mxb40">{introPara}</p>
    </div>
)

export default PageIntro;