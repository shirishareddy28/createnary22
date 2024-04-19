import { useMemo } from "react";
import "./Property1Mobile.css";

const Property1Mobile = ({
  property1MobilePosition,
  property1MobileTop,
  property1MobileLeft,
}) => {
  const property1MobileStyle = useMemo(() => {
    return {
      position: property1MobilePosition,
      top: property1MobileTop,
      left: property1MobileLeft,
    };
  }, [property1MobilePosition, property1MobileTop, property1MobileLeft]);

  return (
    <div className="property-1mobile1" style={property1MobileStyle}>
      <div className="div">
        <b className="how-much-does">
          How much does it cost to set up a store?
        </b>
        <img className="icon1" alt="" src="/icon.svg" />
      </div>
    </div>
  );
};

export default Property1Mobile;
