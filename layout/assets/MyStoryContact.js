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
        <Image src={mailIcon} alt="Mail icon" width={45} height={30} />
        <Image src={instaIcon} alt="Instagram icon" width={35} height={35} />
        <Image src={linkedinIcon} alt="Linkedin icon" width={35} height={35} />
      </div>
    </div>
  );
};

export default MyStoryContact;
