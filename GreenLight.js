import React from 'react';

const GreenLight = ({ isActive }) => {
    return (
        <div className={`light green ${isActive ? 'active' : ''}`}>
            {isActive && <span className="countdown">10</span>} {/* Update timer dynamically */}
        </div>
    );
};

export default GreenLight;
