import React from 'react';

const YellowLight = ({ isActive }) => {
    return (
        <div className={`light yellow ${isActive ? 'active' : ''}`}>
            {isActive && <span className="countdown">3</span>}
        </div>
    );
};

export default YellowLight;
