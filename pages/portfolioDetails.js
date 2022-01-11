import Link from "next/link";
import projectDetailsStyles from "../styles/projectDetails.module.scss";
import Image from "next/image";
import dePont from "../public/images/dePont.png";
import React from "react";
import { motion } from "framer-motion";
import { Reveal, Tween } from "react-gsap";

const dePontDetails = () => {
  const [isShown, setIsShown] = React.useState(false);

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
          <Tween from={{ opacity: 0, y: -200 }} duration={.7} delay={0}>
            <div className={projectDetailsStyles.titleContainer}>
              <h1 layoutId="dePontTitle">
                Showcase <span>Portfolio</span>
              </h1>
            </div>
            <div
              layoutId="dePontImage"
              className={projectDetailsStyles.imageContainer}
            >
              <Link
                href={{ pathname: "/", query: { section: "work" } }}
                replace
              >
                <Image
                  src={dePont}
                  alt="Picture of De pont"
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
          <Tween from={{ opacity: 0, y: 200 }} duration={1} delay={0}>
            <div className={projectDetailsStyles.textContainer}>
              <h2>Introduction</h2>
              <p>
                Voor het clientproject zijn we een opdracht gaan maken voor
                Mindlabs. Hier kregen we de opdracht om te werken aan een
                culturele opdracht voor innovatie binnnen de ict. Samen met de
                groep hadden we gekozen om te kijken wat we konden beteken voor
                museum De Pont. De pont had een problem, er kwamen te weinig
                jongeren naar het museum. Dit probleem moesten wij gaan
                oplossen. We wilden graag wat proberen met virtual of augmented
                reality, al snel leek augmented reality de betere keuze
                aangezien je dan nogsteeds het museum om je heen kan zien.
                Doormiddel van deze augmented reality wilden we graag wat meer
                interactie rondom de kunst creeeren en er voor zorgen dat
                jongeren meer over de achterliggende gedachten van de kunst
                nadenken. Toen we met het project begonnen wilden we werken aan
                3 verschillende stukken, Without Trace, Guttersplash 2 corner
                cast en De engel van Tilburg. Nadat we een aantal prototypes
                hadden gemaakt bleek 3 werken toch wat te veel zijn en hebben we
                later besloten om te focussen op de Engel van Tilburg. Dit
                project hebben we gemaakt met gebruik van de double diamond
                werkmethode. Hieronder is een afbeelding van de double diamond
                te vinden, de eerste diamond gaat over het probleem vaststellen,
                de tweede gaat over het probleem oplossen.
              </p>

              <div className={projectDetailsStyles.textImageContainer}>
                <Image
                  src={dePont}
                  alt="Picture of De pont"
                  width={700}
                  height={580}
                />
              </div>

              <h2>Discover phase</h2>
              <p>
                In de discover fase heb ik voortnamelijk onderzoek gedaan naar
                verschillende technieken die we mogelijk konden gebruiken voor
                het augmented reality te realiseren. Ik wilde graag weten of het
                gebruik maken van een gespecialiseerde augmented reality bril
                realisties zou zijn geweest voor ons om te gebruiken. om hier
                achter te komen ben ik a day in the life of testen gaan
                uitvoeren in mijn oil en bij semester 1. Hoewel de Microsoft
                HoloLens heel erg cool was om mee te werken en het bij iedereen
                die hem op zetten een dike glimlach op het gezicht, was het erg
                zwaar op het hoofd, dit in combinatie met de enorm hoge prijs
                van de bril maakte het een onrealistische oplossing voor een
                museum. Bekijk het onderzoek document Nu we een manier hebben om
                3d objecten weer te geven in de echte wereld hebben we nog een
                manier nodig om die 3d objecten te maken. Met dit in gedachten
                ben ik gaan kijken bij de ISSD of we iets hebben waarmee we
                objecten kunnen inscannen in 3d. Dit hadden ze, de HP David
                Systeem. Na uren aan calibreren was het me eindelijk gelukt om
                de voorkant van een cola blikje in te scannen. Maar mijn doel
                was om een persoon in te scannen en niet een cola blikje dus ben
                ik gaan testen of dit mogelijk was met de 3d scanner, al vrij
                snel kwam ik er achter dat de scanner alleen werkt met relatief
                kleine statische objecten en absoluut dus geen personen. Bekijk
                het onderzoek document
              </p>
            </div>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default dePontDetails;
