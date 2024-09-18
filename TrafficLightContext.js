import React, { createContext, useReducer, useContext, useEffect } from 'react';

const TrafficLightContext = createContext();

const initialState = {
    currentLight: 'Green',
    pedestrianRequest: false,
    timer: 10,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LIGHT':
            return { ...state, currentLight: action.light, timer: action.timer };
        case 'REQUEST_CROSSING':
            return { ...state, pedestrianRequest: true };
        case 'RESET_TIMER':
            return { ...state, timer: action.timer };
        case 'EMERGENCY_OVERRIDE':
            return { currentLight: 'Red', timer: 5 };
        default:
            return state;
    }
};

export const TrafficLightProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let interval;
        if (!state.pedestrianRequest) {
            interval = setInterval(() => {
                switch (state.currentLight) {
                    case 'Green':
                        dispatch({ type: 'CHANGE_LIGHT', light: 'Yellow', timer: 3 });
                        break;
                    case 'Yellow':
                        dispatch({ type: 'CHANGE_LIGHT', light: 'Red', timer: 7 });
                        break;
                    case 'Red':
                        if (state.pedestrianRequest) {
                            dispatch({ type: 'CHANGE_LIGHT', light: 'Red', timer: 5 });
                            dispatch({ type: 'REQUEST_CROSSING', pedestrianRequest: false });
                        } else {
                            dispatch({ type: 'CHANGE_LIGHT', light: 'Green', timer: 10 });
                        }
                        break;
                    default:
                        break;
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [state]);

    return (
        <TrafficLightContext.Provider value={{ state, dispatch }}>
            {children}
        </TrafficLightContext.Provider>
    );
};

export const useTrafficLight = () => useContext(TrafficLightContext);
