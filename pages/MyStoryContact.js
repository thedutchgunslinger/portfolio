import browserLayoutStyles from "../styles/browserLayoutMyStoryContact.module.scss";
import Image from "next/image";
import instaIcon from "../public/images/instaIcon.svg";
import linkedinIcon from "../public/images/linkedinIcon.svg";
import mailIcon from "../public/images/mailIcon.svg";

const MyStoryContact = () => {
  return (
    <div className={browserLayoutStyles.flexContact}>
      <h2>Contact</h2>
      <div className={browserLayoutStyles.flexIcons}>
        <a href="mailto:noahbeij@gmail.com?subject=Stage">
          <Image src={mailIcon} alt="Mail icon" width={45} height={30} />
        </a>
        <a href="https://www.instagram.com/dev.nbeij/" target="blank">
          <Image src={instaIcon} alt="Instagram icon" width={35} height={35} />
        </a>
        <a href="https://www.linkedin.com/in/noah-beij-6a56a5177/" target="blank">
          <Image src={linkedinIcon} alt="Linkedin icon" width={35} height={35} />
        </a>
      </div>
    </div>
  );
};

export default MyStoryContact;
