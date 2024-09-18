import React from 'react';
import { useTrafficLight } from '../context/TrafficLightContext';

const PedestrianButton = () => {
    const { dispatch } = useTrafficLight();

    const handleClick = () => {
        dispatch({ type: 'REQUEST_CROSSING' });
    };

    return (
        <button className="pedestrian-button" onClick={handleClick}>
            Request Pedestrian Crossing
        </button>
    );
};

export default PedestrianButton;
