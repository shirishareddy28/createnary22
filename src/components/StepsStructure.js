import "./StepsStructure.css";

const StepsStructure = () => {
  return (
    <div className="steps-structure">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <b className="b">1</b>
      </div>
      <div className="line-parent">
        <div className="frame-item" />
        <div className="footer-menu">
          <div className="footer-menu-child" />
          <b className="b1">2</b>
        </div>
      </div>
      <div className="rectangle-group">
        <div className="frame-inner" />
        <b className="b2">3</b>
      </div>
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <b className="b3">4</b>
      </div>
    </div>
  );
};

export default StepsStructure;
