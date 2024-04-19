import GroupComponent from "./GroupComponent";
import "./Footer1.css";

const Footer1 = () => {
  return (
    <section className="footer">
      <div className="separator">
        <div className="not-applicable1" />
        <div className="not-applicable2" />
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <div className="wrapper-image-81">
            <img
              className="image-8-icon1"
              loading="lazy"
              alt=""
              src="/image-81@2x.png"
            />
          </div>
        </div>
        <GroupComponent />
      </div>
    </section>
  );
};

export default Footer1;
