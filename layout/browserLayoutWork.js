import browserLayoutStyles from "../styles/browserLayoutWork.module.scss";
import cursorStyles from "../styles/cursor.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dePont from "../public/images/dePont.png";
import dePontv2 from "../public/images/dePontv2.png";
import workshop from "../public/images/workshop.png";
import conceptboard from "../public/images/conceptboard.png";
import { Reveal, Tween } from "react-gsap";
import _ from "lodash";
import { useRouter } from "next/router";
import { PrevButton, NextButton } from "./assets/EmblaCarouselButtons";

function browserLayoutWork({ setOnHoverState }) {
  // check of de cursor over een slide staat
  let callOnHover = (state) => {
    setOnHoverState(state);
  };

  // haal de GET param op van de url
  const router = useRouter();
  const {
    query: { section },
  } = router;

  //check of de url een GET param bevat en scroll naar de juiste sectie, daarna verwijder de GET param uit de url
  let workSection = React.useRef();
  React.useEffect(() => {
    if (section) {
      workSection.scrollIntoView();
      window.scrollBy(0, -200);
      router.replace("/", undefined, { shallow: true });
    }
  });
  //initialiseer de carousel
  const [viewportRef, embla] = useEmblaCarousel({});
  //initialiseer de navigatie items.
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const scrollPrev = React.useCallback(
    () => embla && embla.scrollPrev(),
    [embla]
  );
  const scrollNext = React.useCallback(
    () => embla && embla.scrollNext(),
    [embla]
  );
  //check of er op de navigaties knopjes word gedrukt en scroll naar de juiste slide
  const onSelect = React.useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);
  //pas de progressie bar aan als er gescrolled word
  const onScroll = React.useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);
  //voor de fucnties uit als er iets veranderd
  React.useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);

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
                          src={dePontv2}
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
                      <div className={browserLayoutStyles.imgContainer}>
                        <Image
                          src={workshop}
                          alt="Picture of Noah Beij"
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
                          src={conceptboard}
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
            <div className="carouselNav">
              <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
              <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
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
}

export default browserLayoutWork;
