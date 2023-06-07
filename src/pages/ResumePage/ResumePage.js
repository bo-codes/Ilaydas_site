import IlaydasResume from  "../../imgs/ilaydas_resume.pdf"
import ResumeImg1 from "../../imgs/ilayda_res1.jpg"
import ResumeImg2 from "../../imgs/ilayda_res2.jpg"
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <div id="resume-page">
      <div id="resume-container">
        <a id="download-resume-btn" href={IlaydasResume} download><span>Download Resume</span></a>
        <img className="resume-img res1" src={ResumeImg1} alt="almira's resume"/>
        <img className="resume-img res2" src={ResumeImg2} alt="almira's resume"/>
      </div>
    </div>
  );
};

export default ResumePage;
