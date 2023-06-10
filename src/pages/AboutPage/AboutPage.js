import aboutImg from '../../imgs/ilayda_about.png'
import "./AboutPage.css";

const AboutPage = () => {
  const randomNumGen = () => {
    return Math.floor(Math.random() * (6 + 1) + 1);
  };
  const generateText = (name, num) => {
    let finalStr = "";

    for (let i = 0; i < num; i++) {
      let currRepeats = randomNumGen();
      for (let j = 0; j < currRepeats; j++) {
        finalStr += "blah ";
      }
      finalStr += `${name} `;
    }
    return finalStr;
  };

  const almiraText = generateText("almira", 36);

  return (
    <div id="about-page">
      <div id="about-container">
        <img src={aboutImg} id="about-img"/>
        <div className="section-wrapper">
          <div className="about-descr section">
            Greetings and a warm welcome! I am Ilayda Magrann, a seasoned
            professional in the realm of performing arts, specializing as an
            actor, drama therapist, and drama teacher, based in Glen Cove, NY.
            My formal education in theatre consists of a Master of Arts degree in Theatre History and
            Criticism from Brooklyn College, complemented by a Bachelor of Fine
            Arts degree in Drama and Acting from Istanbul Aydin University,
            located in Istanbul, Turkey. After my collegiate studies, I took the time to polish my acting and dance skills at the
            prestigious Janáček Academy of Music and Performing Arts, situated
            in the Czech Republic. As a testament to my dedication, I was
            invited to partake in an acting and theater workshop
            at the esteemed University of Siena in Siena, Italy, after
            my studies in the Czech Republic.
          </div>
        </div>
        <div className="section-wrapper">
          <div className="about-descr section">
            From an early age, I harbored a passion for theater, driven
            by an innate inclination towards artistic creation and
            entertainment. My active nature and love for writing stories, plays,
            and poems served as a testament to my destined path as an artist.
            Consistently dedicated to my craft, I eagerly ensured that no
            special holiday passed without a performance, be it through dance,
            song, or poetry recitation.
          </div>
        </div>
        {/* <div className="section-wrapper">
          <div className="about-descr section">
            The turning point in my artistic journey arrived when I successfully
            convinced my father to employ his hand camera to capture myself and
            my sister in action. At the tender age of seven, I composed my
            inaugural screenplay tailored for the camera, marking a profound
            transition from mere writing to embracing the roles of both director
            and actor. Driven by an unwavering desire to share my artistic
            endeavors with others and evoke enjoyment, this early venture
            further intensified my fervor.
          </div>
        </div> */}
        {/* <div className="section-wrapper">
          <div className="about-descr section">
            Fuelled by an ever-growing love for creativity, I ventured into the
            realm of theater classes. Such endeavors propelled me towards the
            coveted stage at a tender age of nine, where I ultimately found my
            place. Since that pivotal moment, theater has become an integral
            part of my life, constantly nourishing my artistic spirit and
            serving as a conduit for self-expression.
          </div>
        </div> */}
        {/* <div className="section-wrapper">
          <div className="about-descr section">
            My unwavering dedication to theater, fostered through years of
            experience and honing of skills, has endowed me with a profound
            appreciation for the craft. This enriching journey, characterized by
            unwavering passion and a constant drive to entertain and connect
            with audiences, has molded me into a multidimensional artist.
          </div>
        </div> */}
        <div className="section-wrapper">
          <div className="about-descr section">
            Whether my future leads me to pursue theater professionally or
            embrace it as a lifelong passion, the transformative power of this
            art form will forever remain an integral part of my identity. Each
            performance serves as a reminder of the profound impact that theater
            can have on the lives of both creators and spectators alike, and I
            am humbled by the opportunity to share these transformative
            experiences with others. Throughout my artistic odyssey, theater has
            provided me with a canvas on which to unleash my creativity,
            fostering growth, resilience, and a boundless sense of fulfillment.
          </div>
        </div>
        <div className="section-wrapper">
          <div className="about-descr section">
            I mostly focus on common difficulties on anxiety, self-esteem, stress,
            self-confidence, and helping people to get out from their shell. I
            have been teaching drama/therapy, theater history in New York. I have
            worked with kids and adults and taught drama therapy classes for kids
            with ASD. I have worked as an actor with The Living Theatre in New
            York. I offer individual or group sessions for adults, teens and
            children.
          </div>
        </div>
        {/* {almiraText.slice(0, almiraText.length / 3)} <br />{" "}
          {almiraText.slice(almiraText.length / 3, almiraText.length / 1.5)}{" "}
          <br />{" "}
          {almiraText.slice(almiraText.length / 1.5, almiraText.length / 0.75)}{" "}
          <br /> {almiraText.slice(almiraText.length / 0.75)} */}
        {/* <div id="about-descr">
          {almiraText.slice(0, almiraText.length / 3)} <br />{" "}
          {almiraText.slice(almiraText.length / 3, almiraText.length / 1.5)}{" "}
          <br />{" "}
          {almiraText.slice(almiraText.length / 1.5, almiraText.length / 0.75)}{" "}
          <br /> {almiraText.slice(almiraText.length / 0.75)}
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
