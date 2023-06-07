import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import HomePage from "./pages/HomePage/HomePage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ErrPage from "./pages/ErrPage/ErrPage";
import { useEffect } from "react";


const App = () => {
  const location = useLocation();
  // -------- INTERSECTION OBSERVER WATCHING FOR WHEN OUR .section ELEMENTS HIT THE VIEWPORT -------- vv

  let options = {
    threshold: .6,
  };
  const startObservation = () => {
    const sections = document.querySelectorAll(".section-wrapper");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target.querySelector(".section");
        if (entry.isIntersecting) {
          section.classList.add("section-animation");
          return;
        }

        // section.classList.remove("section-animation");
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  };
  // -------- INTERSECTION OBSERVER WATCHING FOR WHEN OUR .section ELEMENTS HIT THE VIEWPORT -------- ^^

  useEffect(() => {
    startObservation();
  }, [location])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="/resume" exact={true} element={<ResumePage />} />
        <Route path="/services" exact={true} element={<ServicesPage />} />
        <Route path="/err" exact={true} element={<ErrPage />} />
        <Route path="*" element={<Navigate to="/err" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
