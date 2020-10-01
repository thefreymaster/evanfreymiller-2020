import React from 'react';
import classNames from 'classnames';
import Flex from '../../common/Flex';
import './blurb.scss';
import { isMobile } from 'react-device-detect';
import { Context } from '../../Context';
import { COLOR_BRIGHT, COLOR, WHITE } from '../../constants';
import * as Dot from '../Dot';

const Blurb = () => {
    const { blurb } = React.useContext(Context);
    return (
        <Flex direction="column" style={{ marginLeft: 5 }} justifyContent="center" alignItems={isMobile ? "center" : "flex-start"}>
            <BlurbTitle name={blurb.name} />
            <Flex direction="row">
                <BlurbItem attribute={blurb.title} />
                <div />
            </Flex>
            <BlurbItem attribute={blurb.skills} />
            <BlurbItem attribute={blurb.attributes} />
        </Flex>
    )
}

const BlurbTitle = ({ name }) => {
    const { isDay } = React.useContext(Context);
    return (
        <div
            className={classNames('blurb-name color-transition', { 'blurb-name__mobile': isMobile, 'blurb-name__desktop': !isMobile })}
            style={{ color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 18, fontFamily: "'Sora', sans-serif" }}>
            {name}
        </div>
    )
}

const BlurbItem = ({ attribute }) => {
    const { isDay } = React.useContext(Context);
    return (
        <div
            className={classNames('blurb-attribute color-transition', { 'blurb-attribute__day': isDay, 'blurb-attribute__night': !isDay })}
            style={{
                color: !isDay ? COLOR : WHITE, textAlign: isMobile && 'center', fontWeight: 900, fontSize: 12, fontFamily: "'Raleway', sans-serif"
            }}>
            {attribute}
            <Dot.TopRight />
        </div>
    )
}

export default Blurb;