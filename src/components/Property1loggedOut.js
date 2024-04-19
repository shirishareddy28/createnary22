import { useMemo } from "react";
import "./Property1loggedOut.css";

const Property1loggedOut = ({
  frame,
  property1loggedOutPosition,
  property1loggedOutTop,
  property1loggedOutLeft,
  createnaryColor,
  searchCreatorsColor,
}) => {
  const property1loggedOutStyle = useMemo(() => {
    return {
      position: property1loggedOutPosition,
      top: property1loggedOutTop,
      left: property1loggedOutLeft,
    };
  }, [
    property1loggedOutPosition,
    property1loggedOutTop,
    property1loggedOutLeft,
  ]);

  const createnaryStyle = useMemo(() => {
    return {
      color: createnaryColor,
    };
  }, [createnaryColor]);

  const searchCreatorsStyle = useMemo(() => {
    return {
      color: searchCreatorsColor,
    };
  }, [searchCreatorsColor]);

  return (
    <div className="property-1logged-out" style={property1loggedOutStyle}>
      <div className="group-parent">
        <div className="createnary-wrapper">
          <b className="createnary" style={createnaryStyle}>
            Createnary
          </b>
        </div>
        <div className="search-creators-parent">
          <div className="search-creators" style={searchCreatorsStyle}>
            Search Creators
          </div>
          <img className="frame-icon" alt="" src={frame} />
        </div>
      </div>
      <div className="frame-group">
        <div className="group-container">
          <div className="frame-container">
            <img className="frame-icon1" alt="" src="/frame3.svg" />
            <div className="cart">Cart</div>
          </div>
          <div className="about-parent">
            <div className="about">About</div>
            <img className="frame-icon2" alt="" src="/frame4.svg" />
          </div>
          <div className="contact-parent">
            <div className="contact">Contact</div>
            <img className="frame-icon3" alt="" src="/frame5.svg" />
          </div>
        </div>
        <div className="login-parent">
          <div className="login">Login</div>
          <img className="frame-icon4" alt="" src="/frame6.svg" />
        </div>
      </div>
    </div>
  );
};

export default Property1loggedOut;
