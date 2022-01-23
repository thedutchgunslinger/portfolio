import Link from "next/link";
import projectDetailsStyles from "../styles/projectDetails.module.scss";
import Image from "next/image";
import workshop from "../public/images/workshop.png";
import eisen from "../public/images/onderzoekSiteEisen.png";
import inspiratie from "../public/images/inspiratie.png";
import conceptboard from "../public/images/conceptboard.png";
import sitemap from "../public/images/sitemap.png";
import wireframes from "../public/images/wireframes.png";
import design from "../public/images/design.png";
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
                  Showcase <span>Portfolio</span>
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
                  src={conceptboard}
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
                De portfolio is gemaakt om mij beter te kunnen presenteren voor
                een stageplek i.v.m. mijn specialisatie in education. Hiervoor
                heb ik specifieke projecten gekozen om uit te lichten die mijn
                vaardigheden goed laten zien. Het plan was simpel, ik wilde
                mezelf uitdagen om een wat technisch lastigere portfolio website
                te maken. Dit heb ik gedaan doormiddel van{" "}
                <a href="https://nextjs.org" target="blank">
                  Next.js
                </a>
                , een framework uitgebreid op React. Hieronder is mijn werk
                proces te zien.
              </p>
              <p>
                Ik wilde graag weten wat er nu belangrijk is op een portfolio
                dus heb ik aan verschillende docenten gevraagd waar zij naar
                kijken in een portfolio. Hierdoor heb ik de belangrijkste eisen
                voor wat erop moet komen en wat juist niet.
              </p>
              <Image
                src={eisen}
                alt="Picture"
                // layout="fill"
                objectFit="fit"
              />
              <p>
                Om de basics te leren van next.js ben ik een youtube cursus gaan
                volgen. Via deze cursus heb ik kennis gemaakt met de basis van
                next.js. En had ik al een goed idee hoe ik mijn portfolio kon
                opbouwen.
              </p>
              <p>
                Om een idee te krijgen welke stijl ik wilde gebruiken ben ik
                inspiraties gaan opdoen op de site <a href="https://www.awwwards.com/" target="blank">Awwwards</a> hieruit heb ik
                verschillende interessante kleuren, lay-outs, interacties en
                animaties gevonden.
              </p>
              <Image
                src={inspiratie}
                alt="Picture of inspiration"
                // layout="fill"
                objectFit="fit"
              />
              <p>
                Ik wilde graag een goed begin punt hebben voor welke pagina's en
                informatie daarop komt van de site. Om dit te maken heb ik
                gekozen om een sitemap te maken waardoor ik altijd terug kon
                kijken waar wat moest komen.
              </p>
              <Image
                src={sitemap}
                alt="Picture of sitemap"
                // layout="fill"
                objectFit="fit"
              />
              <p>
                Voor het design wilde ik graag werken met een grid template. Ik
                heb gekeken naar andere grid templates en heb daarna gekozen om
                voor een oneven template te gaan zodat ik een goede basis had
                die wat uitdagender was dan de standaard even grid templates.
              </p>
              <p>
                Nu ik een grid template had wilde ik graag gebruiken om de
                lay-out van de site te bepalen. Dit heb ik bereikt doormiddel
                van wireframes te maken zodat ik later een basis had voor het
                design.
              </p>
              <Image
                src={wireframes}
                alt="Picture of De pont"
                // layout="fill"
                objectFit="fit"
              />
              <p>
                Om het design te realiseren ben ik de wireframes in gaan vullen
                met kleuren, tekst en afbeeldingen om het design zo compleet
                mogelijk te maken. Hierdoor had ik al snel een design dat ik
                makkelijk kon aanpassen na feedback.
              </p>
              <Image
                src={design}
                alt="Picture of De pont"
                // layout="fill"
                objectFit="fit"
              />
              <p>
                Om de reveal animaties werkend te krijgen gebruikte ik{" "}
                <a href="https://greensock.com/scrolltrigger/" target="blank">
                  GSAP scroll trigger
                </a>
                , dit werkte perfect in de development server maar niet in de
                build. Dit maakte het extreem lastig om op te lossen. Om dit
                werkend te krijgen heb ik veel onderzoek gedaan naar GSAP binnen
                react en heb ik een{" "}
                <a
                  href="https://bitworking.github.io/react-gsap/"
                  target="blank"
                >
                  library
                </a>{" "}
                gevonden die niet alleen werkte maar het ook nog eens veel
                makkelijker maakte om de reveal animaties te realiseren.
              </p>
              <p>
                Ik had{" "}
                <a href="https://www.framer.com/motion/" target="blank">
                  framer.motion
                </a>{" "}
                gebruikt om de pagetransiton te verbergen op de site, dit zorgde
                voor verschillende problemen waar ik niet tevreden over was. De
                animaties van de page transitions waren erg glitchy en de site
                werd ontzettend traag hierdoor. Om dit op te lossen heb ik
                besloten om de page transitions eruit te halen en animaties via
                GSAP erin te zetten om te doen alsof er een soort page
                transition zou zijn. Wat redelijk werkte omdat next.js pagina's
                al pre load als de verwijzing link zichtbaar is op het scherm.
              </p>
              <p>
                Tijdens het project ben ik veel problemen tegengekomen, sommige
                daarvan waren enorm lastig om op te lossen maar ben blijven
                doorzoeken naar een oplossing totdat het werkte zoals het zou
                moeten werken. Ook was ik niet bang om nog een uurtje of 2 na
                school eraan te werken omdat ik graag wilden dat de problemen
                waren opgelost.
              </p>
            </div>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default dePontDetails;
