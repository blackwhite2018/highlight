import React from 'react';

const New = ({ children }) => (
    <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        { children }
    </div>
);

export default New;

