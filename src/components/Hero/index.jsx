import React from "react";
import "./hero.scss";
import heroImg from "../../assets/images/amico.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper containers">
        <div className="hero">
          <h2 className="hero__title">Work at the speed of thought</h2>
          <p className="hero__text">
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>

          <div className="hero__buttons btns">
            <button className="btns__start">Get Started</button>
            <button className="btns__watch">
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8516 8.53032C16.591 8.96531 16.591 10.0347 15.8516 10.4697L2.1954 18.5027C1.44543 18.9439 0.5 18.4031 0.5 17.533V1.46697C0.5 0.596876 1.44543 0.0561381 2.1954 0.497293L15.8516 8.53032Z"
                  fill="#02897A"
                />
              </svg>
              <span>Watch the Video</span>
            </button>
          </div>
        </div>
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
