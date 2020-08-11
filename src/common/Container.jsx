import React from 'react';
import { debounce } from 'lodash';
import { Context } from '../Context';
import { BACKGROUND_COLOR_BRIGHT, BACKGROUND_COLOR } from '../constants';

const Container = (props) => {
    const [dimensions, setDimensions] = React.useState({ height: window.innerHeight, width: window.innerWidth })
    React.useLayoutEffect(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
    }, [])
    window.addEventListener('resize', debounce(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }), 1000);
    const { isDay } = React.useContext(Context);
    const inline = {
        display: 'flex',
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        height: dimensions.height,
        width: dimensions.width,
        backgroundColor: props.backgroundColor,
        backgroundImage: isDay ? BACKGROUND_COLOR_BRIGHT : BACKGROUND_COLOR,
        flexWrap: 'wrap',
    }
    return <div style={inline}>{props.children}</div>
}

export default Container;