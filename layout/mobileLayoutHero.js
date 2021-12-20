import mobileLayoutStyles from "../styles/mobileLayoutHero.module.scss";
import HeroTitle from "../pages/HeroTitle";
import HeroSubtitle from "../pages/HeroSubtitle";
import ScrollText from "../pages/ScrollText";
import Image from "next/image";
import heroImage from "../public/images/heroImg.JPG";

const mobileLayoutHero = () => {
  return (
    <div>
      <div className={mobileLayoutStyles.mobileHeroContainerFlex}>
        <div
          className={mobileLayoutStyles.mobileHeroTitleContainer}>
          <HeroTitle />
        </div>
        <div className={mobileLayoutStyles.mobileHeroImageContainer}>
          <Image
            src={heroImage}
            alt="Picture of Noah Beij standing."
            width={590}
            height={900}
          />
        </div>
        <div
          className={mobileLayoutStyles.mobileHeroSubtitleContainer}>
          <HeroSubtitle />
        </div>
        <div
          className={mobileLayoutStyles.mobileScrollContainer}>
          <ScrollText />
        </div>
      </div>
    </div>
  );
};

export default mobileLayoutHero;
