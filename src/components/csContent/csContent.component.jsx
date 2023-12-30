import React from "react";

// Styles 
import "./csContent.styles.scss";

const CSContent = ({
    content
}) => (
    <div className="case-study-content" dangerouslySetInnerHTML={{ __html: content }} />
)

export default CSContent;