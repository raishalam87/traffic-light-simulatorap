import React from 'react';
import { useTrafficLight } from '../context/TrafficLightContext';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';
import RedLight from './RedLight';
import PedestrianButton from './PedestrianButton';
import './styles.css';

const TrafficLight = () => {
    const { state } = useTrafficLight();

    return (
        <div className="traffic-light">
            <RedLight isActive={state.currentLight === 'Red'} />
            <YellowLight isActive={state.currentLight === 'Yellow'} />
            <GreenLight isActive={state.currentLight === 'Green'} />
            <PedestrianButton />
        </div>
    );
};

export default TrafficLight;
