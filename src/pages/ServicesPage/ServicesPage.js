import { useEffect, useState } from "react";
import "./ServicesPage.css";

const ServicesPage = () => {

  return (
    <div id="services-page">
      <div id="services-container" className="section-wrapper">
        <div id="services" className="section">
          <div className="service-type">
            <span className="imp service-type-title">Individual Sessions:</span>
            I offer one-to-one sessions, which are 35- 60 minutes depending on
            the services that individuals choose. We will work collaboratively
            depending on the class you take.
          </div>
          <div className="service-type">
            <span className="imp service-type-title">Group Sessions:</span>I
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
    </div>
  );
};

export default ServicesPage;
