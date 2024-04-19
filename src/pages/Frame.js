import "./Frame.css";

const Frame = () => {
  return (
    <div className="this-is-auto-scrollable-this-s-parent">
      <div className="this-is-auto-container">
        <ul className="this-is-auto-scrollable-this">
          <li className="this-is-auto">{`this is auto scrollable `}</li>
          <li className="this-should-scroll">
            this should scroll with buttons on left and right
          </li>
          <li className="the-data-of">
            the data of image and heading and subtext should come from backend.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Frame;
