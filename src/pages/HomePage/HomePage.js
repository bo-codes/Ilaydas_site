import TextLoop from "react-text-loop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="homepage-container">
      <div className="homepage-txt">
        <div className="home-hello">
          Hi, I'm{" "}
          <TextLoop>
            <span>Actor</span>
            <span>Writer</span>
            <span>Instructor</span>
          </TextLoop>
        </div>
        <div className="home-intro">
          <span className="home-name">İlayda</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
