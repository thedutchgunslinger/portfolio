import indexStyles from '../styles/index.module.scss';
import cursorStyles from "../styles/cursor.module.scss";
import BrowserLayoutHero from '../layout/browserLayoutHero';
import BrowserLayoutWork from '../layout/browserLayoutWork';
import BrowserLayoutMyStory from '../layout/browserLayoutMyStory';
import React from "react";






export default function Home() {
  // haal de prop van de cursor state op
  const [onHoverState, setOnHoverState] = React.useState();
  const [cursorX, setCursorX] = React.useState();
  const [cursorY, setCursorY] = React.useState();
  // zet de cursor positio op de muis positie als deze beweegt
  React.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  }, []);

  return (
    <div>
      <div
        className={
          onHoverState
            ? `${cursorStyles.cursor} ${cursorStyles.cursorView}`
            : cursorStyles.cursor
        }
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
    </div>
  );
}
