import Link from "next/link";
import projectDetailsStyles from "../styles/projectDetails.module.scss";
import Image from "next/image";
import dePontv2 from "../public/images/dePontv2.png";
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
                  De pont <span>Mindlabs</span>
                </h1>
              </Link>
            </div>
            <div
              layoutId="dePontImage"
              className={
                isShown
                  ? `${projectDetailsStyles.imageContainer} ${projectDetailsStyles.imageContainerView}`
                  : projectDetailsStyles.imageContainer
              }
            >
              <Link href={{ pathname: "/", query: { section: "work" } }}>
                <Image
                  src={dePontv2}
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
          <Tween from={{ opacity: 1, y: 200 }} duration={1} delay={0}>
            <div className={projectDetailsStyles.textContainer}>
              <p>
                Voor dit schoolproject zijn we een opdracht gaan maken voor
                Mindlabs. Hier kregen we de opdracht om te werken aan een
                culturele opdracht voor innovatie binnen de ICT. Samen met de
                groep hadden we gekozen om te kijken wat we konden betekenen
                voor museum De Pont.
              </p>
              <p>
                Mindlabs wilde graag een aftermovie. Ik heb alle beelden te
                verzameld van het project en een korte aftermovie gemaakt in
                premiere pro. Hier was Mindlabs erg tevreden mee.
              </p>
              <iframe
                src={`https://www.youtube.com/embed/ajJmejauV-s`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className={projectDetailsStyles.iframe}
              />
              <p>
                De pont had een probleem, er kwamen te weinig jongeren naar het
                museum. Dit probleem moesten wij gaan oplossen. We wilden graag
                wat proberen met virtual of augmented reality. Al snel leek
                augmented reality de betere keuze aangezien je dan nog steeds
                het museum om je heen kan zien. Doormiddel van deze augmented
                reality wilden we graag wat meer interactie rondom de kunst
                creëren en ervoor zorgen dat jongeren meer over de
                achterliggende gedachten van de kunst nadenken.
              </p>
              <p>
                In de begin fases heb ik onderzoek gedaan naar verschillende
                technieken die we mogelijk konden gebruiken voor het augmented
                reality te realiseren.
              </p>
              <p>
                In de eerste weken zijn we meerdere keren naar De Pont geweest.
                Daar hebben we rondleidingen gehad en een interview met de
                onderwijs coördinator. Dit hielp ons met de achterliggende
                gedachten van de kunst te ontdekken.
              </p>
              <p>
                Ik heb een Usability Test uitgevoerd met de Microsoft HoloLens 2
                om te kijken of we een augmented reality bril konden gebruiken.
                Hieruit bleek dat de augmented reality bril te zwaar was om lang
                op te houden. Ook is de bril erg duur en dus niet geschikt om
                gezet te worden in een museum.
              </p>
              <p>
                Ook voor 3d scans heb ik Usability Tests gedaan, maar dit keer
                met de HP David 3d system. Hieruit bleek dat het systeem niet
                geschikt is om personen in te scannen, maar alleen kleine
                objecten.
              </p>
              <Image
                src={scan}
                alt="Picture of De pont"
                // layout="fill"
                objectFit="fit"
              />
              <p>
                Om een beter beeld te krijgen welke problemen de gebruikers
                tegenkomen heb ik samen met groepsgenoot een persona, user
                journey's en Empathy Map gemaakt. Hierdoor zijn we achter
                gekomen wat belangrijk is voor onze doelgroep en hoe wij de
                ervaring kunnen verbeteren.
              </p>
              <p>
                Welke techniek het beste werkt om augmented reality apps te
                ontwikkelen ben ik een proof of concept gaan maken met ar.js. Ik
                was niet tevreden met het resultaat want het object bleef niet
                op zijn plaats staan.
              </p>
              <p>
                Om te kijken of ik een beter resultaat kon krijgen heb ik een
                proof of concept gemaakt met google ArCore. Dit werkte veel
                beter dan ar.js.
              </p>
              <p>
                Toen we met het project begonnen wilden we werken aan 3
                verschillende stukken, "Without Trace", "Guttersplash 2 corner
                cast" en "De engel van Tilburg". Nadat we een aantal prototypes
                hadden gemaakt bleek 3 werken toch wat te veel zijn en hebben we
                later besloten om te focussen op de "Engel van Tilburg".
              </p>
              <p>
                Als prototype hebben we eerst een test scan gemaakt van een
                persoon met een iPhone. Dit heeft ons geholpen om te leren hoe
                we er de volgende keer een betere scan konden maken.
              </p>
              <p>
                We wilden graag een 3d scan maken met de kleren die ze die tijd
                aan hadden. Om erachter te komen wat die kleren waren heb ik
                Literature Study uitgevoerd. Om dit onderzoek te versterken heb
                ik een expertinterview gehouden met de familie Mommers van het
                Mommers complex. Hieruit bleek dat ze vroeger blauwe overalls
                droegen.
              </p>
            </div>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default dePontDetails;
