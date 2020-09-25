import React from 'react';
import Axios from 'axios';
import { getInfo } from './api';

const dayStyle = {
    color: "#1a1a1a"
}

const defaultState = {
    fetching: true,
    sideMenuIsOpen: false,
    isDay: false,
    style: {}
}

export const Context = React.createContext(defaultState);

export const useStateContext = () => React.useContext(Context);

const reducer = (state, action) => {
    const newState = { ...state };
    const { payload } = action;

    switch (action.type) {
        case 'POPULATE_INFO':
            newState.blurb = payload.blurb;
            newState.brand = payload.brand;
            newState.links = payload.links;
            newState.fetching = false;
            break;
        case 'SET_SIDE_MENU_OPEN':
            newState.sideMenuIsOpen = true;
            break;
        case 'SET_SIDE_MENU_CLOSED':
            newState.sideMenuIsOpen = false;
            break;
        case 'SET_IS_DAY':
            newState.isDay = true;
            break;
        case 'SET_IS_NIGHT':
            newState.isDay = false;
            break;
        default:
            throw new Error();
    }
    return newState;
}

export const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, defaultState);
    console.log(state)
    React.useLayoutEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour <= 17) {
            dispatch({ type: 'SET_IS_DAY' })
        }
        getInfo(dispatch);
    }, [])

    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}