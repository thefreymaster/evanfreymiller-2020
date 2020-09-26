import React from 'react';
import classNames from 'classnames';
import Flex from '../../common/Flex';
import './blurb.scss';
import { isMobile } from 'react-device-detect';
import { Context } from '../../Context';
import { COLOR_BRIGHT, COLOR } from '../../constants';

const Blurb = () => {
    const { isDay, blurb } = React.useContext(Context);
    return (
        <Flex direction="column" style={{ marginLeft: 5 }} justifyContent="center" alignItems={isMobile ? "center" : "flex-start"}>
            <div
                className={classNames('blurb-name', { 'blurb-name__mobile': isMobile, 'blurb-name__desktop': !isMobile })}
                style={{ color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 18, fontFamily: "'Sora', sans-serif" }}>
                {blurb.name}
            </div>
            <div
                className={classNames('blurb-attribute', { 'blurb-attribute__day': isDay, 'blurb-attribute__night': !isDay })}
                style={{ width: 82, color: !isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif" }}>
                {blurb.title}
            </div>
            <div
                className={classNames('blurb-attribute', { 'blurb-attribute__day': isDay, 'blurb-attribute__night': !isDay })}
                style={{ width: 208, color: !isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif" }}>
                {blurb.skills}
            </div>
            <div
                className={classNames('blurb-attribute', { 'blurb-attribute__day': isDay, 'blurb-attribute__night': !isDay })}
                style={{ width: 68, color: !isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif" }}>
                {blurb.attributes}
            </div>
        </Flex>
    )
}

export default Blurb;