import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import { BORDER, BORDER_BRIGHT, BACKGROUND_GRADIENT_WHITE_TOP, BACKGROUND_GRADIENT_WHITE, BACKGROUND_GRADIENT_DARK, BACKGROUND_GRADIENT_DARK_TOP } from './constants';
import Branding from './components/Branding';
import Blurb from './components/Blurb';
import { isMobile } from 'react-device-detect';
import { Context, useStateContext } from "./Context";
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
          {/* {!isMobile
            &&
            <Flex direction="column" maxWidth="13%">
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
          } */}
          <VerticalBar />
          <Flex direction="column" maxWidth={isMobile ? "100%" : "30%"} >
            <AnimatedBackground width="30%">
              <Flex direction="column" height="100%">
                <Flex
                  width="100%" height={isMobile ? "25%" : "33%"}>
                  {!delay && <Navigation.Mobile />}
                </Flex>
                <Flex alignItems="center" justifyContent="center" width="100%" height={isMobile ? "50%" : "33%"}>
                  <Branding />
                </Flex>
                <Flex justifyContent="center" alignItems={isMobile ? "center" : "flex-end"} width="100%" height="33%">
                  {isMobile && <Blurb />}
                  {!isMobile && !delay && <div style={{ color: '#ffffff24', fontSize: 10, position: 'fixed', bottom: 10 }}>EvanFreymiller.com. Copyright 2020. All rights reserved.</div>}
                </Flex>
              </Flex>
            </AnimatedBackground>
          </Flex>
          <VerticalBar />
          {
            !isMobile
            &&
            <Flex direction="column" maxWidth="66%" style={{backgroundImage: isDay ? BACKGROUND_GRADIENT_WHITE_TOP : BACKGROUND_GRADIENT_DARK_TOP}}>
              <Flex width="100%" height={isMobile ? "25%" : "33%"}>
                <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
                  <Navigation.Desktop />
                </Flex>
              </Flex>
              <Flex style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} justifyContent="center" alignItems="center" width="100%" height="33%">
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
  const { isDay } = useStateContext();
  return (
    !isMobile &&
    <Flex direction="column" style={{ borderRight: isDay ? BORDER_BRIGHT : BORDER, borderLeft: isDay ? BORDER_BRIGHT : BORDER, backgroundImage: isDay ? BACKGROUND_GRADIENT_WHITE : BACKGROUND_GRADIENT_DARK }} maxWidth="2%">
      <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
        <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%" margin={"30px 30px 30px 30px"}>
          <Flex style={{ color: '#939393' }} maxWidth="100px">
          </Flex>
        </Flex>
      </Flex>
      <Flex width="100%" height="33%" />
      <Flex style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%" />
    </Flex>
  )
}

export default App;
