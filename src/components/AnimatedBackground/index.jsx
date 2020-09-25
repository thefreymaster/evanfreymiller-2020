import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import { useStateContext } from '../../Context';
import { usePrevious } from '../../api/utils';

const AnimatedBackground = (props) => {
    const { isDay } = useStateContext();
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null);
    const previous = usePrevious(isDay);

    useEffect(() => {
        console.log(previous)
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: vantaRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: isDay ? 0xacacac : 0xc0c0c,
                waveSpeed: 0.25,
                shininess: 0.00,
                THREE,
            }))
        }
        if (previous !== undefined && previous !== isDay) {
            console.log({ previous, isDay });
            vantaEffect.setOptions({
                color: isDay ? 0xacacac : 0xc0c0c,
                shininess: isDay ? 0.00 : 60,
            })
        }
    }, [vantaEffect, isDay])
    return (
        <div style={{
            minHeight: '100%',
            zIndex: 0
        }} ref={vantaRef}>
            {props.children}
        </div>
    )
}

export default AnimatedBackground;