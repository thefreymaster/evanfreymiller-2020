import React from 'react';
import Flex from '../../common/Flex';
import { isMobile } from 'react-device-detect';
import { Context } from '../../Context';
import { COLOR_BRIGHT, COLOR } from '../../constants';

const Blurb = () => {
    const { isDay, blurb } = React.useContext(Context);
    return (
        <Flex direction="column" style={{marginLeft: 5}}>
            <div style={{color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif"}}>{blurb.title}</div>
            <div style={{color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif"}}>{blurb.skills}</div>
            <div style={{color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif"}}>{blurb.attributes}</div>
        </Flex>
    )
}

export default Blurb;