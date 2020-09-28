import React from 'react';
import classNames from 'classnames';
import './dot.scss';
import { useStateContext } from '../../Context';

export const TopRight = () => {
    const { isDay } = useStateContext();
    return <div className={classNames("dot__top-right", { 'dot__day': isDay, 'dot__night': !isDay })} />
}

export const BottomRight = () => {
    const { isDay } = useStateContext();
    return <div className="dot__bottom-right" />
}

export const BottomLeft = () => {
    const { isDay } = useStateContext();
    return <div className="dot__bottom-left" />
}

export const TopLeft = () => {
    const { isDay } = useStateContext();
    return <div className="dot__top-left" />
}