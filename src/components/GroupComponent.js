import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <footer className="group-footer">
      <div className="frame-child1" />
      <h3 className="createnary2">Createnary</h3>
      <nav className="footer-navigation">
        <div className="navigation">Navigation</div>
        <div className="about-createnary1">About Createnary</div>
        <div className="contact-us">Contact Us</div>
        <div className="refund">Refund</div>
        <div className="newsletter">Newsletter</div>
        <div className="terms-conditions">{`Terms & Conditions`}</div>
        <div className="privacy-policy">{`Privacy & Policy`}</div>
      </nav>
      <div className="footer-contact">
        <div className="contacts">Contacts</div>
        <div className="contact-location">
          <img className="frame-icon6" loading="lazy" alt="" src="/frame.svg" />
          <div className="delhi-india-wrapper">
            <div className="delhi-india">Delhi, India</div>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-info">
            <div className="div3">+91 98765 43210</div>
          </div>
          <div className="email-info">
            <img
              className="frame-icon7"
              loading="lazy"
              alt=""
              src="/frame1.svg"
            />
            <div className="email-address">
              <div className="div4">+91 99999 99999</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-info">
        <div className="createnary-2024">© Createnary 2024</div>
      </div>
    </footer>
  );
};

export default GroupComponent;
