import React from "react";

// Styles
import "./csDetail.styles.scss";

const CSDetail = ({
    csWhen,
    csRole,
}) => (
    <div className="cs-detail">
        <div className="col">
            <h3>When</h3>
            <p>{csWhen}</p>
        </div>
        <div className="col">
            <h3>Role</h3>
            <p>{csRole}</p>
        </div>
    </div>
)

export default CSDetail;