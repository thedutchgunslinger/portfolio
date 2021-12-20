import browserLayoutStyles from "../styles/browserLayoutMyStory.module.scss";
import AboutText from "../pages/AboutText";
import AboutHeader from "../pages/MyStoryHeader";
import AboutContact from "../pages/MyStoryContact";
import Image from "next/image";
import aboutImage from "../public/images/aboutImg.jpg";
import { Reveal, Tween } from "react-gsap";

const browserLayoutMyStory = () => {
  return (
    <div>
      <div className={browserLayoutStyles.containerGrid}>
        <Reveal>
          <Tween from={{ opacity: 0, y: -100 }} duration={1}>
            <div className={browserLayoutStyles.imageContainer}>
              <Image
                src={aboutImage}
                alt="Picture of Noah Beij looking."
                width={590}
                height={315}
              />
            </div>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 0, y: 100 }} duration={1} delay={0}>
            <div className={browserLayoutStyles.textContainer}>
              <AboutText />
            </div>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 0, x: 100 }} duration={1} delay={0}>
            <div className={browserLayoutStyles.contactContainer}>
              <AboutContact />
            </div>
          </Tween>
        </Reveal>
        <Reveal repeat>
          <Tween from={{ opacity: .2}} duration={1} delay={.5}>
            <div className={browserLayoutStyles.headerContainer}>
              <AboutHeader />
            </div>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default browserLayoutMyStory;
