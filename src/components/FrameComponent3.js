import Property1Default from "./Property1Default";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="earnings-content-wrapper">
      <div className="earnings-content">
        <b className="estimate-earning-potential">ESTIMATE EARNING POTENTIAL</b>
        <div className="calculator">
          <div className="input-type-area">
            <div className="influencer-type">
              <div className="what-kind-of">
                What kind of influencer are you?
              </div>
              <div className="dropdown">
                <div className="property">
                  <div className="pages">Select influencer type?</div>
                  <img className="chevron-icon" alt="" src="/chevron1.svg" />
                </div>
              </div>
            </div>
            <div className="how-many-followers">
              How many followers do you have?
            </div>
          </div>
          <div className="follower-slider-area">
            <div className="slider-track">
              <div className="slider1">
                <div className="unactive" />
                <div className="input-filter">
                  <div className="handle-track">
                    <div className="active" />
                    <div className="handle-track-child" />
                  </div>
                </div>
              </div>
            </div>
            <div className="follower-value">
              <div className="amount">
                <div className="k">500K</div>
              </div>
            </div>
            <div className="how-many-products">
              How many products do you list monthly?
            </div>
          </div>
          <div className="listings-slider-area">
            <div className="slider-track1">
              <div className="slider11">
                <div className="unactive1" />
                <div className="handle-track-wrapper">
                  <div className="handle-track1">
                    <div className="active1" />
                    <div className="handle-track-item" />
                  </div>
                </div>
              </div>
              <div className="listing-value">
                <div className="amount1">
                  <div className="div1">25</div>
                </div>
              </div>
            </div>
          </div>
          <div className="earnings-button-area">
            <Property1Default
              getStarted="Calculate"
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
      </div>
    </section>
  );
};

export default FrameComponent3;
