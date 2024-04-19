import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  getStarted,
  property1DefaultBackgroundColor,
  property1DefaultWidth,
  property1DefaultBorderRadius,
  property1DefaultPadding,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  getStartedColor,
  onButtonContainerClick,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      width: property1DefaultWidth,
      borderRadius: property1DefaultBorderRadius,
      padding: property1DefaultPadding,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultBackgroundColor,
    property1DefaultWidth,
    property1DefaultBorderRadius,
    property1DefaultPadding,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const getStartedStyle = useMemo(() => {
    return {
      color: getStartedColor,
    };
  }, [getStartedColor]);

  return (
    <div
      className="property-1default"
      style={property1DefaultStyle}
      onClick={onButtonContainerClick}
    >
      <div className="get-started3" style={getStartedStyle}>
        {getStarted}
      </div>
    </div>
  );
};

export default Property1Default;
