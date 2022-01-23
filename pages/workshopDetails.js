import Link from "next/link";
import projectDetailsStyles from "../styles/projectDetails.module.scss";
import Image from "next/image";
import workshop from "../public/images/workshop.png";
import scan from "../public/images/3dscan.png";
import dePont from "../public/images/dePont.png";
import React from "react";
import { Reveal, Tween } from "react-gsap";

const dePontDetails = () => {
  // haal de prop van de cursor state op
  const [isShown, setIsShown] = React.useState(false);

  // zet de cursor positio op de muis positie als deze beweegt
  const [cursorX, setCursorX] = React.useState();
  const [cursorY, setCursorY] = React.useState();

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
          isShown
            ? `${projectDetailsStyles.cursor} ${projectDetailsStyles.cursorView}`
            : projectDetailsStyles.cursor
        }
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
      <div className={projectDetailsStyles.ContainerGrid}>
        <Reveal>
          <Tween from={{ opacity: 0, y: -200 }} duration={0.7} delay={0}>
            <div className={projectDetailsStyles.titleContainer}>
              <Link href={{ pathname: "/", query: { section: "work" } }}>
                <h1
                  onMouseEnter={() => {
                    setIsShown(true);
                  }}
                  onMouseLeave={() => {
                    setIsShown(false);
                  }}
                >
                  Fontys <span>Workshop</span>
                </h1>
              </Link>
            </div>
            <div
              className={
                isShown
                  ? `${projectDetailsStyles.imageContainer} ${projectDetailsStyles.imageContainerView}`
                  : projectDetailsStyles.imageContainer
              }
            >
              <Link href={{ pathname: "/", query: { section: "work" } }}>
                <Image
                  src={workshop}
                  alt="Picture Noah Beij"
                  layout="fill"
                  objectFit="fit"
                  onMouseEnter={() => {
                    setIsShown(true);
                  }}
                  onMouseLeave={() => {
                    setIsShown(false);
                  }}
                />
              </Link>
            </div>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 1, y: 200 }} duration={1} delay={0}>
            <div className={projectDetailsStyles.textContainer}>
              <p>
                Het leek me leuk om wat kennis over het vak aan mijn klasgenoten
                te delen. Dit heb ik gedaan doormiddel van 2 workshops te geven.
                De eerste ging workshop ging over tips en tricks binnen web
                development waarin ik verschillende handigheidjes en tools laat
                zien.
              </p>
              <p>
                Ik had een website voorbereid voor de workshop om bij de uitleg
                te gebruiken. Ook konden ze hier altijd stukjes code of tools
                terug vinden als ze het nodig hadden.
              </p>
              <iframe
                src={`https://www.youtube.com/embed/ZMOic7vybHU`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className={projectDetailsStyles.iframe}
              />
              <p>
                Ik vond dit erg leuk om te doen, ik help graag mijn mede
                studenten als ze ergens niet uitkomen. Ook deel ik graag de
                handigheidjes die ik geleerd hebt.
              </p>
              <p>
                Een tijdje later tijdens het maken van een groepsproject kreeg
                ik de vraag van mijn groepsgenoten of ik een workshop kon geven
                over de programeer taal PHP omdat ze die wilde gebruiken voor
                het project maar nog geen ervaring in hadden. Ik merkte dat meer
                klasgenoten hier ook behoefte aan hadden en heb ik dus geregeld
                dat ik een workshop over PHP kon geven.
              </p>
              <p>
                Om deze workshop voor te bereiden heb ik een simpele blog met
                login gemaakt om de basis van PHP uit te leggen. Dat project is
                <a
                  href={"https://github.com/thedutchgunslinger/WorkshopPHP"}
                  target="blank"
                >
                  {" "}
                  hier te vinden
                </a>
                .
              </p>
            </div>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default dePontDetails;
