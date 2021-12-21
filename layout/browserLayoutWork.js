import browserLayoutStyles from "../styles/browserLayoutWork.module.scss";
import cursorStyles from "../styles/cursor.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dePont from "../public/images/dePont.png";
import { Reveal, Tween } from "react-gsap";
import _ from "lodash";


function browserLayoutWork({ setOnHoverState }) {
  let callOnHover = (state) => {
  setOnHoverState(state);
  };

  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={browserLayoutStyles.carouselContainer}>
      <Reveal repeat>
        <Tween from={{ opacity: 0.2 }} duration={1} delay={0.5}>
          <div className={browserLayoutStyles.headerContainer}>
            <h2>My Work</h2>
          </div>
        </Tween>
      </Reveal>
      <div className={browserLayoutStyles.emblaWrapper}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <Link href="/project1">
                <div className={browserLayoutStyles.slideContainer} id="slide3">
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div className={browserLayoutStyles.imgContainer}>
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
                        <h1>
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
              <Link href="/project1">
                <div className={browserLayoutStyles.slideContainer} id="slide3">
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div className={browserLayoutStyles.imgContainer}>
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
                        <h1>
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
              <Link href="/project1">
                <div className={browserLayoutStyles.slideContainer} id="slide3">
                  <Reveal>
                    <Tween from={{ opacity: 0, y: -100 }} duration={1}>
                      <div className={browserLayoutStyles.imgContainer}>
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
                        <h1>
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
      </div>
    </div>
  );
};

export default browserLayoutWork;
