import React from 'react';
import classNames from 'classnames';
import Flex from '../../common/Flex';
import './blurb.scss';
import { isMobile } from 'react-device-detect';
import { Context } from '../../Context';
import { COLOR_BRIGHT, COLOR, WHITE } from '../../constants';
import * as Dot from '../Dot';

const Blurb = () => {
    const { isDay, blurb } = React.useContext(Context);
    return (
        <Flex direction="column" style={{ marginLeft: 5 }} justifyContent="center" alignItems={isMobile ? "center" : "flex-start"}>
            <div
                className={classNames('blurb-name color-transition', { 'blurb-name__mobile': isMobile, 'blurb-name__desktop': !isMobile })}
                style={{ color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 18, fontFamily: "'Sora', sans-serif" }}>
                {blurb.name}
            </div>
            <div
                className={classNames('blurb-attribute color-transition', { 'blurb-attribute__day': isDay, 'blurb-attribute__night': !isDay })}
                style={{
                    // boxShadow: isDay ? DAY_BOX_SHADOW : NIGHT_BOX_SHADOW,
                    color: !isDay ? COLOR : WHITE, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif"
                }}>
                {blurb.title}
                <Dot.TopRight />
            </div>
            <div
                className={classNames('blurb-attribute color-transition', { 'blurb-attribute__day': isDay, 'blurb-attribute__night': !isDay })}
                style={{
                    // boxShadow: isDay ? DAY_BOX_SHADOW : NIGHT_BOX_SHADOW,
                    justifyContent: 'center', color: !isDay ? COLOR : WHITE, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif"
                }}>
                {blurb.skills}
                <Dot.TopRight />
            </div>
            <div
                className={classNames('blurb-attribute color-transition', { 'blurb-attribute__day': isDay, 'blurb-attribute__night': !isDay })}
                style={{
                    // boxShadow: isDay ? DAY_BOX_SHADOW : NIGHT_BOX_SHADOW,
                    color: !isDay ? COLOR : WHITE, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif"
                }}>
                {blurb.attributes}
                <Dot.TopRight />
            </div>
        </Flex>
    )
}

export default Blurb;