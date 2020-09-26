import React from 'react';
import classNames from 'classnames';
import './branding.css';
import { useStateContext } from '../../Context';

const Branding = (props) => {
    const { isDay } = useStateContext();
    const inline = {
        fontFamily: "'Sora', sans-serif",
        fontSize: 150,
        letterSpacing: -10,
    }
    return (
        <div className={
            classNames("text-color-animation",
                {
                    "text-color-animation-fast": props.fastAnimation,
                    "text-color-animation-day": isDay,
                    "text-color-animation-night": !isDay,
                }
            )}
            style={inline}>
            EJF
        </div>
    )
}

export default Branding;