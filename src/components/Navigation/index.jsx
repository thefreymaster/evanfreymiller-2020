import React from 'react';
import Sidebar from "react-sidebar";
import { faExternalLinkAlt, faMobileAlt, faDice, faFileAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faYoutubeSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Context } from "../../Context";
import { isMobile } from 'react-device-detect';
import { LINKS, BORDER, BORDER_BRIGHT, COLOR_BRIGHT, COLOR } from '../../constants';
import Flex from '../../common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = {
    faYoutubeSquare, faGithubSquare, faLinkedin, faExternalLinkAlt, faMobileAlt, faDice, faFileAlt, faEllipsisV
}

export const Desktop = () => {
    const { isDay, links } = React.useContext(Context);
    return (
        <Flex>
            <Flex />
            <Flex flexGrow />
            {links.map(link => {
                if (link.active) {
                    return (
                        <Flex>
                            <a key={link.href} target="_blank" rel="noopener noreferrer" className={isDay ? "link-bright" : "link"} style={{ textDecoration: "none" }} href={link.href}>{link.title}</a>
                        </Flex>
                    )
                }
                return null;
            })}
        </Flex>
    )
}

export const Mobile = () => {
    const { sideMenuIsOpen, dispatch, isDay, links } = React.useContext(Context);
    if (isMobile) {
        return (
            <Sidebar
                sidebar={<Content dispatch={dispatch} isDay={isDay} links={links} />}
                open={sideMenuIsOpen}
                onSetOpen={() => dispatch({ type: "SET_SIDE_MENU_CLOSED" })}
                styles={{ sidebar: { background: "#333333", transform: '100ms ease-in-out' } }}
            >
                <Flex margin="30px" justifyContent="flex-end" >
                    <FontAwesomeIcon
                        size="lg"
                        color={isDay ? 'white' : COLOR}
                        icon={faEllipsisV}
                        onClick={() => dispatch({ type: 'SET_SIDE_MENU_OPEN' })}
                        style={{
                            padding: "10px 17px 10px 17px",
                            backgroundColor: isDay ? COLOR : COLOR_BRIGHT,
                            borderRadius: 100,
                        }}
                        className="navigation-button"
                    />
                </Flex>
            </Sidebar>
        )
    }
    return null;

}

const Content = (props) => {
    const { dispatch, isDay, links } = props;

    return isMobile
        &&
        <Flex direction="column" alignItems="center" height={window.innerHeight} width="100%">
            {links.map(link => {
                if (link.active) {
                    return (<a key={link.href} target="_blank" rel="noopener noreferrer" className="link" style={LINKS} href={link.href}>
                        <Flex flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderBottom: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
                            {link.title}
                            <Flex />
                            <FontAwesomeIcon size="md" color="white" icon={icons[link.icon]} />
                        </Flex>
                    </a>)
                }
                return null;
            })}
            <Flex />
            <Flex onClick={() => {
                dispatch({ type: "SET_SIDE_MENU_CLOSED" });
                isDay ? dispatch({ type: "SET_IS_NIGHT" }) : dispatch({ type: "SET_IS_DAY" });
            }} flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderTop: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
                <div className="link" style={{ color: "white" }} >{isDay ? "Dark" : "Bright"}</div>
                <Flex />
                <FontAwesomeIcon size="md" color="white" icon={faDice} />
            </Flex>
        </Flex>
}
