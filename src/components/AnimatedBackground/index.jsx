import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import { useStateContext } from "../../Context";
import { usePrevious } from "../../api/utils";
import { useScreenSizeContext } from "../../services/ScreenSizeProvider";

const AnimatedBackground = (props) => {
  const { height, width } = useScreenSizeContext();

  const { isDay } = useStateContext();
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const previous = usePrevious(isDay);

  useEffect(() => {
    const color = isDay ? 0xacacac : 0xc0c0c;
    const shininess = isDay ? 0.0 : 60;
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: false,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color,
          waveSpeed: 0.25,
          shininess,
          THREE,
        })
      );
    }
    if (previous !== undefined && previous !== isDay) {
      vantaEffect.setOptions({
        color,
        shininess: isDay ? 0.0 : 60,
      });
    }
  }, [vantaEffect, isDay, previous]);

  return (
    <div
      style={{
        height: height,
        width: width * props.width,
        zIndex: 0,
      }}
      ref={vantaRef}
    >
      {props.children}
    </div>
  );
};

export default AnimatedBackground;
