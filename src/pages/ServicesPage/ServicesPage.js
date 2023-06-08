import { useEffect } from "react";
import { serviceTypes } from "./Services";
import "./ServicesPage.css";

// function senseHover(el) {
//   el.addEventListener("mouseover", (e) => {
//     let children = e.target.children;
//     for (let child of children) {
//       if (child.classList.contains("service-type-img")) {
//         child.classList.add("grow-animation");
//       }
//     }
//   });
// }

const ServicesPage = () => {
  // useEffect(() => {
  //   const getImg = () => {
  //     const imgs = document.querySelectorAll(".service-type");
  //     imgs.forEach(async (img) => {
  //       senseHover(img)
  //     });
  //   };
  //   getImg();
  // }, []);

  return (
    <div id="services-page">
      <div id="services-container" className="section-wrapper">
        <div id="services" className="section">
          <div className="services-title">Session Types</div>
          <div className="service-size">
            <span className="imp service-size-title">Individual Sessions:</span>
            I offer one-to-one sessions, which are 35- 60 minutes depending on
            the services that individuals choose. We will work collaboratively
            depending on the class you take.
          </div>
          <div className="service-size">
            <span className="imp service-size-title">Group Sessions:</span>I
            work with a maximum of 6 participants. Drama helps release the
            stress of the day, and helps you gain confidence. Kids, adolescents,
            and adults groups are different. When you play with the group it
            will allow you to explore. Sometimes people are shy to act or play
            with a group of people, but remember that you are going to enjoy it
            and you will see the experience and growth within yourself. I accept
            a group of participants who would want to join a group together or
            individuals can email me to sign up for a group drama lesson.
          </div>
        </div>
      </div>
      <div id="service-types">
        <div className="section-wrapper">
          <div className="services-title section">Services</div>
        </div>
        {serviceTypes.map((service, i) => {
          return (
            <div className="section-wrapper" key={i}>
              <div
                className={`service-type section ${
                  i % 2 === 0 ? "reversed-type" : "ordered-type"
                }`}
              >
                <div
                  className={`service-type-content ${
                    i % 2 !== 0 && "aligned-right"
                  }`}
                >
                  <div
                    className={`general-content ${
                      i % 2 !== 0 && "aligned-right"
                    }`}
                  >
                    <div className="service-type-title">{service.title}</div>
                    <div className="service-type-length">
                      {service.timeLength.slice(
                        0,
                        service.timeLength.length - 1
                      )}{" "}
                      session
                    </div>
                  </div>
                  <div
                    className={`price-content ${
                      i % 2 !== 0 && "aligned-right"
                    }`}
                  >
                    <div className="service-prices">
                      {service.prices.map((currPrice, i) => {
                        return (
                          <div key={i} className="service-type-price">
                            ${currPrice.price}
                            {currPrice.desc && currPrice.desc}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="service-type-img-container">
                  <div
                    className="service-type-img"
                    style={{ backgroundImage: `url(${service.img})` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
