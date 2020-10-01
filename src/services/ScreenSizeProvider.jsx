import React from 'react';
import { debounce } from 'lodash';

export const ScreenSizeContext = React.createContext({
    height: 0,
    width: 0,
});

export const useScreenSizeContext = () => React.useContext(ScreenSizeContext);

export const Provider = (props) => {

    const [dimensions, setDimensions] = React.useState({ height: window.innerHeight, width: window.innerWidth });

    React.useLayoutEffect(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
    }, []);

    window.addEventListener('resize', debounce(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }), 1000);

    return (
        <ScreenSizeContext.Provider value={dimensions}>
            {props.children}
        </ScreenSizeContext.Provider>
    )
}

