import React from 'react';
import { Context } from '../Context';
import { BACKGROUND_COLOR_BRIGHT, BACKGROUND_COLOR } from '../constants';
import { useScreenSizeContext } from '../services/ScreenSizeProvider';

const Container = (props) => {
    const { height, width } = useScreenSizeContext();
    const { isDay } = React.useContext(Context);
    const inline = {
        display: 'flex',
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        height,
        width,
        backgroundColor: props.backgroundColor,
        backgroundImage: isDay ? BACKGROUND_COLOR_BRIGHT : BACKGROUND_COLOR,
        flexWrap: 'wrap',
    }
    return <div style={inline}>{props.children}</div>
}

export default Container;