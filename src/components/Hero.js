import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "./Property1Default";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/page-2-mobile");
  }, [navigate]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="welcome-to-indias-first-creat-parent">
          <h2 className="welcome-to-indias-container">
            <span>{`Welcome To India’s First `}</span>
            <span className="creators-marketplace">Creator’s Marketplace</span>
          </h2>
          <div className="create-your-e-store-zero-cos-wrapper">
            <div className="create-your-e-store">
              Create your E-store @ Zero Cost
            </div>
          </div>
        </div>
        <div className="hero-button-area">
          <Property1Default
            getStarted="Get Started"
            property1DefaultBackgroundColor="#4a508e"
            property1DefaultWidth="unset"
            property1DefaultBorderRadius="12px"
            property1DefaultPadding="var(--padding-xs) var(--padding-xl)"
            property1DefaultPosition="unset"
            property1DefaultTop="unset"
            property1DefaultLeft="unset"
            getStartedColor="#f8f9fb"
            onButtonContainerClick={onButtonContainerClick}
          />
        </div>
      </div>
      <div className="mock">
        <div className="wrapper-32767469-responsive-de">
          <img
            className="responsive-device-33-copy-2"
            loading="lazy"
            alt=""
            src="/32767469-responsive-device-33-copy-21@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
