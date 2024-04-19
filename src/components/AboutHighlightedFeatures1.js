import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "./Property1Default";
import "./AboutHighlightedFeatures1.css";

const AboutHighlightedFeatures1 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/page-2-mobile");
  }, [navigate]);

  return (
    <div className="about-highlighted-features">
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="your-audience-wants-links-wrapper">
              <h2 className="your-audience-wants">Your audience wants links</h2>
            </div>
            <div className="make-it-easy-container">
              <p className="make-it-easy">
                Make it easy for them by linking products to every post and
                video
              </p>
            </div>
          </div>
          <div className="feature-button-area">
            <Property1Default
              getStarted="Try for free"
              property1DefaultBackgroundColor="#f8f9fb"
              property1DefaultWidth="unset"
              property1DefaultBorderRadius="12px"
              property1DefaultPadding="var(--padding-xs) var(--padding-xl)"
              property1DefaultPosition="unset"
              property1DefaultTop="unset"
              property1DefaultLeft="unset"
              getStartedColor="#11151d"
              onButtonContainerClick={onButtonContainerClick}
            />
          </div>
        </div>
        <div className="wrapper-image-8-wrapper">
          <div className="wrapper-image-8">
            <img
              className="image-8-icon"
              loading="lazy"
              alt=""
              src="/image-8@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHighlightedFeatures1;
