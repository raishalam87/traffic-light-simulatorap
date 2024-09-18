import React from 'react';

const RedLight = ({ isActive }) => {
    return (
        <div className={`light red ${isActive ? 'active' : ''}`}>
            {isActive && <span className="countdown">7</span>}
        </div>
    );
};

export default RedLight;
