import FrameComponent1 from "../components/FrameComponent1";
import Property1Default from "../components/Property1Default";
import StepsStructure from "../components/StepsStructure";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="page2">
      <FrameComponent1 />
      <main className="how-it-works">
        <div className="createnary-footer">
          <div className="navigation-bar">
            <div className="about-createnary">
              <h2 className="getsetyo-handholds-you">
                GetSetYo handholds you at every step of the way
              </h2>
              <div className="you-focus-on">
                You focus on helping your friends and family, we take care of
                everything else.
              </div>
            </div>
            <Property1Default
              getStarted="Get Started"
              property1DefaultBackgroundColor="#4a508e"
              property1DefaultWidth="unset"
              property1DefaultBorderRadius="18px"
              property1DefaultPadding="var(--padding-base) var(--padding-5xl)"
              property1DefaultPosition="unset"
              property1DefaultTop="unset"
              property1DefaultLeft="unset"
              getStartedColor="#f8f9fb"
            />
          </div>
        </div>
        <div className="steps-structure-parent">
          <StepsStructure />
          <div className="frame-parent">
            <FrameComponent2 />
            <FrameComponent2 />
            <FrameComponent2 />
            <FrameComponent2 />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page1;
