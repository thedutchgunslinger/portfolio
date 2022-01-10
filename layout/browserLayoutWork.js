import browserLayoutStyles from "../styles/browserLayoutWork.module.scss";
import cursorStyles from "../styles/cursor.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dePont from "../public/images/dePont.png";
import { Reveal, Tween } from "react-gsap";
import _ from "lodash";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


function browserLayoutWork({ setOnHoverState }) {




  let callOnHover = (state) => {
  setOnHoverState(state);
  };
 const router = useRouter();
 const {
   query: { index, section },
 } = router;



   let workSection = React.useRef();
   React.useEffect(() => {
      if(section){
    workSection.scrollIntoView();
       window.scrollBy(0, -200);
      //  window.history.replace({ pathname: `/`})
       
      // window.history.replaceState({}, document.title, "/");
      // const router = useRouter();
       router.replace("/", undefined, { shallow: true });

      
    }
   });
 
   const [viewportRef, embla] = useEmblaCarousel({

   });

   const [scrollProgress, setScrollProgress] = React.useState(0);




   const onScroll = React.useCallback(() => {
     if (!embla) return;
     const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
     setScrollProgress(progress * 100);
     console.log(embla.scrollProgress());
   }, [embla, setScrollProgress]);

   console.log(scrollProgress);
   React.useEffect(() => {
     if (!embla) return;
     onScroll();
     embla.on("scroll", onScroll);
   }, [embla, onScroll]);
  
  return (
    <div
      className={browserLayoutStyles.carouselContainer}
      ref={(el) => {
        workSection = el;
      }}
    >
      <Reveal repeat>
        <Tween from={{ opacity: 0.2 }} duration={1} delay={0.5}>
          <div className={browserLayoutStyles.headerContainer}>
            <h2>My Work</h2>
          </div>
        </Tween>
      </Reveal>
      <div className={browserLayoutStyles.emblaWrapper}>
        <div className="embla" ref={viewportRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <Link href="/dePontDetails" replace>
                <div className={browserLayoutStyles.slideContainer} id="slide3">
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div
                        layoutId="dePontImage"
                        animate={{ scale: 1 }}
                        className={browserLayoutStyles.imgContainer}
                      >
                        <Image
                          src={dePont}
                          alt="Picture of De pont"
                          width={700}
                          height={580}
                          onMouseEnter={() => {
                            callOnHover(true);
                          }}
                          onMouseLeave={() => {
                            callOnHover(false);
                          }}
                        />
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -50 }} duration={1}>
                      <div
                        className={browserLayoutStyles.titleContainer}
                        onMouseEnter={() => {
                          callOnHover(true);
                        }}
                        onMouseLeave={() => {
                          callOnHover(false);
                        }}
                      >
                        <h1 layoutId="dePontTitle">
                          De pont <span>Mindlabs</span>
                        </h1>
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div
                        className={browserLayoutStyles.labelContainer}
                        onMouseEnter={() => {
                          callOnHover(true);
                        }}
                        onMouseLeave={() => {
                          callOnHover(false);
                        }}
                      >
                        <h2>Augmented Reality</h2>
                      </div>
                    </Tween>
                  </Reveal>
                </div>
              </Link>
            </div>
            <div className="embla__slide">
              <Link href="/workshopDetails">
                <div className={browserLayoutStyles.slideContainer} id="slide3">
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div
                        layoutId="workshopImage"
                        className={browserLayoutStyles.imgContainer}
                      >
                        <Image
                          src={dePont}
                          alt="Picture of De pont"
                          width={700}
                          height={580}
                          onMouseEnter={() => {
                            callOnHover(true);
                          }}
                          onMouseLeave={() => {
                            callOnHover(false);
                          }}
                        />
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -50 }} duration={1}>
                      <div
                        className={browserLayoutStyles.titleContainer}
                        onMouseEnter={() => {
                          callOnHover(true);
                        }}
                        onMouseLeave={() => {
                          callOnHover(false);
                        }}
                      >
                        <h1 layoutId="workshopTitle">
                          Fontys <span>Workshop</span>
                        </h1>
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div
                        className={browserLayoutStyles.labelContainer}
                        onMouseEnter={() => {
                          callOnHover(true);
                        }}
                        onMouseLeave={() => {
                          callOnHover(false);
                        }}
                      >
                        <h2>Presenting</h2>
                      </div>
                    </Tween>
                  </Reveal>
                </div>
              </Link>
            </div>
            <div className="embla__slide">
              <Link href="/portfolioDetails">
                <div className={browserLayoutStyles.slideContainer} id="slide3">
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div
                        layoutId="portfolioImage"
                        className={browserLayoutStyles.imgContainer}
                      >
                        <Image
                          src={dePont}
                          alt="Picture of De pont"
                          width={700}
                          height={580}
                          onMouseEnter={() => {
                            callOnHover(true);
                          }}
                          onMouseLeave={() => {
                            callOnHover(false);
                          }}
                        />
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -50 }} duration={1}>
                      <div
                        className={browserLayoutStyles.titleContainer}
                        onMouseEnter={() => {
                          callOnHover(true);
                        }}
                        onMouseLeave={() => {
                          callOnHover(false);
                        }}
                      >
                        <h1 layoutId="portfolioTitle">
                          NBeij <span>Portfolio</span>
                        </h1>
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div
                        className={browserLayoutStyles.labelContainer}
                        onMouseEnter={() => {
                          callOnHover(true);
                        }}
                        onMouseLeave={() => {
                          callOnHover(false);
                        }}
                      >
                        <h2>Web Development</h2>
                      </div>
                    </Tween>
                  </Reveal>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Reveal repeat>
        <Tween from={{ opacity: 0.2 }} duration={1} delay={0.5}>
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      </Tween>
    </Reveal>
      </div>
    </div>
  );
};

export default browserLayoutWork;
