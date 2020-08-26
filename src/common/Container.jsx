import React from 'react';
import { debounce } from 'lodash';
import { Context } from '../Context';
import { BACKGROUND_COLOR_BRIGHT, BACKGROUND_COLOR } from '../constants';

const Container = (props) => {
    const [dimensions, setDimensions] = React.useState({ height: window.innerHeight, width: window.innerWidth })
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    React.useLayoutEffect(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
        let lFollowX = 0,
            lFollowY = 0,
            x = 0,
            y = 0;
        const friction = 1 / 60;

        window.addEventListener('mousemove', e => {
            let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
            let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
            lFollowX = (50 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
            lFollowY = (30 * lMouseY) / 100;
            x += (lFollowX - x) * friction;
            y += (lFollowY - y) * friction;
            console.log({x:  (e.clientX/window.innerWidth)*100, y: (e.clientY/window.innerHeight)*100})
            setPosition({x:  (e.clientX/window.innerWidth)*100, y: (e.clientY/window.innerHeight)*100})
        })

        const moveBackground = () => {
            x += (lFollowX - x) * friction;
            y += (lFollowY - y) * friction;
            
            window.requestAnimationFrame(moveBackground);
        }
        window.requestAnimationFrame(moveBackground);
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
        backgroundImage: isDay ? `linear-gradient(rgb((255 255 255), rgb(220 220 220))` : `linear-gradient(rgb(${position.y} ${position.y} ${position.y}), rgb(51, 51, 51))`,
        flexWrap: 'wrap',
    }
    return <div style={inline}>{props.children}</div>
}

export default Container;


// if (!isMobile && this.state.allowTraslation) {
    // let lFollowX = 0,
    //     lFollowY = 0,
    //     x = 0,
    //     y = 0;
    // const friction = 1 / 60;

    // window.addEventListener('mousemove', e => {
    //     let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    //     let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    //     lFollowX = (50 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    //     lFollowY = (30 * lMouseY) / 100;
    //     x += (lFollowX - x) * friction;
    //     y += (lFollowY - y) * friction;

    // })

    // const moveBackground = () => {
    //     x += (lFollowX - x) * friction;
    //     y += (lFollowY - y) * friction;
    //     this.setState({ x, y })
    //     window.requestAnimationFrame(moveBackground);
    // }
    // window.requestAnimationFrame(moveBackground);
// }