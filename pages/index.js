import indexStyles from '../styles/index.module.scss';
import cursorStyles from "../styles/cursor.module.scss";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import useEmblaCarousel from 'embla-carousel-react'
import BrowserLayoutHero from '../layout/browserLayoutHero';
import BrowserLayoutWork from '../layout/browserLayoutWork';
import BrowserLayoutMyStory from '../layout/browserLayoutMyStory';
import MobileLayoutHero from "../layout/mobileLayoutHero";
import React from "react";



export default function Home() {

   const [onHoverState, setOnHoverState] = React.useState();
const [cursorX, setCursorX] = React.useState();
const [cursorY, setCursorY] = React.useState();

React.useEffect(() => {
  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  
}, []);

  return (
    <div>
      <BrowserView>
        <div
          className={(onHoverState ? `${cursorStyles.cursor} ${cursorStyles.cursorView}`: cursorStyles.cursor)}
          style={{
            left: cursorX + "px",
            top: cursorY + "px",
          }}
        ></div>
        <div className={indexStyles.layoutFlex}>
          <BrowserLayoutHero />
          <BrowserLayoutWork setOnHoverState={setOnHoverState} />
          <BrowserLayoutMyStory />
        </div>
      </BrowserView>
      <MobileView>
        {/* <MobileLayoutHero /> */}

        <h1>mobile view is in the works👍😉😎</h1>
      </MobileView>
    </div>
  );
}
