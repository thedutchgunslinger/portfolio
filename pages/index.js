import indexStyles from '../styles/index.module.scss';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import useEmblaCarousel from 'embla-carousel-react'
import BrowserLayoutHero from '../layout/browserLayoutHero';
import BrowserLayoutWork from '../layout/browserLayoutWork';
import BrowserLayoutMyStory from '../layout/browserLayoutMyStory';
import MobileLayoutHero from "../layout/mobileLayoutHero";



export default function Home() {
const [emblaRef] = useEmblaCarousel()
  
  return (
    <div>
      <BrowserView>
        <div className={indexStyles.layoutFlex}>
          <BrowserLayoutHero/>
          <BrowserLayoutWork/>
          <BrowserLayoutMyStory/>

        </div>
      </BrowserView>
      <MobileView>
        <MobileLayoutHero />
      </MobileView>
    </div>
  );
}
