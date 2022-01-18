import browserLayoutStyles from '../styles/browserLayoutHero.module.scss';
import HeroTitle from "../pages/HeroTitle";
import HeroSubtitle from "../pages/HeroSubtitle";
import ScrollText from "../pages/ScrollText";
import Image from "next/image";
import heroImage from "../public/images/heroImg.JPG";
import { gsap, } from "gsap/dist/gsap";
import React from "react";

const browserLayout = () => {
  // haal alle elementen op die geanimeerd moeten worden
  let heroImg = React.useRef(null);
  let heroTitle = React.useRef(null);
  let heroSubtitle = React.useRef(null);
  let heroScroll = React.useRef(null);
  
  // voer de animaties uit als de pagina geladen is
  React.useEffect( () => {
        gsap.from(
          heroImg,1.5, {
            opacity: 0,
            y: -100,
            ease: "power3.out",
          }
        );
         gsap.from(
          heroTitle,1.5, {
            opacity: 0,
            x: 100,
            ease: "power3.out",
            delay: .2
          }
        );
        gsap.from(
          heroSubtitle,1.5, {
            opacity: 0,
            x: 100,
            ease: "power3.out",
            delay: .4
          }
        );
           gsap.from(
          heroScroll,1.5, {
            opacity: 0,
            y: 100,
            ease: "power3.out",
            delay: .8
          }
        )
      }, [] );


    return (
      <div>
        <div className={browserLayoutStyles.heroContainerGrid}>
          <div className={browserLayoutStyles.heroImageContainer} ref={el => {heroImg = el}}>
            <Image
              src={heroImage}
              alt="Picture of Noah Beij standing."
              width={590}
              height={900}
            />
          </div>
          <div className={browserLayoutStyles.heroTitleContainer}  ref={el => {heroTitle = el}}>
            <HeroTitle />
          </div>
          <div className={browserLayoutStyles.heroSubtitleContainer} ref={el => {heroSubtitle = el}}>
            <HeroSubtitle />
          </div>
          <div className={browserLayoutStyles.scrollContainer} ref={el => {heroScroll = el}}>
            <ScrollText />
          </div>
        </div>
      </div>
    );
}

export default browserLayout;