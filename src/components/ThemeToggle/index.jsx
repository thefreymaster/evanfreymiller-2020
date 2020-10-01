import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { COLOR, COLOR_BRIGHT } from "../../constants";
import { Context } from "../../Context";

const ThemeToggle = () => {
    const { dispatch, isDay } = React.useContext(Context);

    return (
        <FontAwesomeIcon
            cursor="pointer"
            size="lg"
            color={isDay ? 'white' : COLOR}
            icon={faFire}
            onClick={() => {
                isDay ? dispatch({ type: "SET_IS_NIGHT" }) : dispatch({ type: "SET_IS_DAY" });
            }}
            style={{
                padding: "10px 17px 10px 17px",
                backgroundColor: isDay ? COLOR : COLOR_BRIGHT,
                borderRadius: 100,
                position: 'absolute',
                bottom: '50px',
                right: '50px',
                userSelect: 'none', 
            }}
            className="navigation-button show-zoom-animation"
        />
    )
}

export default ThemeToggle;