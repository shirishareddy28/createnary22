import Property1loggedOut from "./Property1loggedOut";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <header className="header-wrapper">
      <Property1loggedOut
        frame="/frame2.svg"
        property1loggedOutPosition="unset"
        property1loggedOutTop="unset"
        property1loggedOutLeft="unset"
        createnaryColor="#11151d"
        searchCreatorsColor="#11151d"
      />
    </header>
  );
};

export default FrameComponent1;
