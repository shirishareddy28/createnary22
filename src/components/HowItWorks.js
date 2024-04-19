import Property1Default from "./Property1Default";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works1">
      <b className="how-it-works2">HOW IT WORKS</b>
      <div className="workflow-description">
        <h3 className="getsetyo-handholds-you-container">
          <p className="getsetyo-handholds-you1">
            GetSetYo handholds you at every step of the way
          </p>
        </h3>
        <div className="you-focus-on-container">
          <p className="you-focus-on1">
            You focus on helping your friends and family, we take care of
            everything else.
          </p>
        </div>
      </div>
      <div className="action-area">
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
        />
      </div>
    </div>
  );
};

export default HowItWorks;
