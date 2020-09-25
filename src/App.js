import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import { BORDER, BORDER_BRIGHT, STRIPES, STRIPES_BRIGHT, COLOR_2_PERCENT_BRIGHT, COLOR_2_PERCENT } from './constants';
import Branding from './components/Branding';
import Blurb from './components/Blurb';
import { isMobile } from 'react-device-detect';
import { Context } from "./Context";
import { getStripes } from './utils';
import * as Navigation from './components/Navigation';
import Loader from './components/Loader';
import Zindex from './common/Zindex';
import Title from './components/Title';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  const { fetching, isDay } = React.useContext(Context);

  const [delay, setDelay] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);


  setTimeout(() => {
    setIsExiting(true);
    setTimeout(() => {
      setDelay(false)
    }, 1500);
  }, 1000);

  if (fetching) {
    return <Container />
  }
  return (
    <React.Fragment>
      <Zindex zIndex={2}>
        <Loader delayedHide={delay} isExiting={isExiting} />
      </Zindex>
      <Zindex zIndex={1}>
        <Container>
          {!isMobile
            &&
            <Flex style={{ backgroundImage: !isMobile && isDay ? STRIPES_BRIGHT : STRIPES }} direction="column" maxWidth="13%">
              <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%">
                <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
                  <Flex alignItems="center" style={{ color: '#939393' }}>
                    <Title />
                  </Flex>
                </Flex>
              </Flex>
              <Flex width="100%" height="33%"></Flex>
              <Flex style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%"></Flex>
            </Flex>
          }
          <VerticalBar />
          <Flex direction="column" maxWidth={isMobile ? "100%" : "30%"}>
            <AnimatedBackground>
              <Flex
                // style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER, backgroundImage: getStripes(isDay) }}
                width="100%" height={isMobile ? "25%" : "33%"}>
                {!delay && <Navigation.Mobile />}
              </Flex>
              <Flex alignItems="center" justifyContent="center" width="100%" height={isMobile ? "50%" : "33%"}>
                <Branding />
              </Flex>
              <Flex justifyContent="center" alignItems={isMobile ? "center" : "flex-end"} width="100%" style={{
                // borderTop: isDay ? BORDER_BRIGHT : BORDER,
                backgroundImage: getStripes(isDay)
              }} height="33%">
                {isMobile && <Blurb />}
                {!isMobile && !delay && <div style={{ color: '#ffffff24', fontSize: 10, position: 'fixed', bottom: 10 }}>EvanFreymiller.com. Copyright 2020. All rights reserved.</div>}
              </Flex>
            </AnimatedBackground>
          </Flex>
          <VerticalBar />
          {
            !isMobile
            &&
            <Flex style={{ backgroundImage: isDay ? STRIPES_BRIGHT : STRIPES }} direction="column" maxWidth="53%">
              <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
                <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
                  <Navigation.Desktop />
                </Flex>
              </Flex>
              <Flex justifyContent="center" alignItems="center" width="100%" height="33%">
                <Blurb />
              </Flex>
              <Flex style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%">
                {!delay && <ThemeToggle />}
              </Flex>
            </Flex>
          }
        </Container >
      </Zindex>

    </React.Fragment>
  );
}

const VerticalBar = () => {
  const { isDay } = React.useContext(Context);
  return (
    !isMobile &&
    <Flex direction="column" style={{ borderRight: isDay ? BORDER_BRIGHT : BORDER, borderLeft: isDay ? BORDER_BRIGHT : BORDER }} maxWidth="2%">
      <Flex backgroundColor={isDay ? COLOR_2_PERCENT_BRIGHT : COLOR_2_PERCENT} style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
        <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%" margin={"30px 30px 30px 30px"}>
          <Flex style={{ color: '#939393' }} maxWidth="100px">
          </Flex>
        </Flex>
      </Flex>
      <Flex backgroundColor={isDay ? COLOR_2_PERCENT_BRIGHT : COLOR_2_PERCENT} width="100%" height="33%" />
      <Flex backgroundColor={isDay ? COLOR_2_PERCENT_BRIGHT : COLOR_2_PERCENT} style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%" />
    </Flex>
  )
}

export default App;
