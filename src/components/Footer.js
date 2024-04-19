import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="footer-wrapper">
        <div className="footer-content1">
          <div className="triangle-trio">
            <div className="star-configuration">
              <h3 className="createnary3">Createnary</h3>
            </div>
            <div className="oval-orchard">
              <div className="navigation1">Navigation</div>
              <div className="about-createnary2">About Createnary</div>
              <div className="contact-us1">Contact Us</div>
              <div className="refund1">Refund</div>
              <div className="newsletter1">Newsletter</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="privacy-policy1">{`Privacy & Policy`}</div>
            </div>
            <div className="footer-contact1">
              <div className="contacts1">Contacts</div>
              <div className="contact-details1">
                <img className="frame-icon8" alt="" src="/frame.svg" />
                <div className="circle-cycle">
                  <div className="delhi-india1">Delhi, India</div>
                </div>
              </div>
              <div className="pentagon-plateau">
                <div className="star-scatter">
                  <div className="popover">+91 98765 43210</div>
                </div>
                <div className="social-links">
                  <img className="all-new-icon" alt="" src="/frame1.svg" />
                  <div className="parallelogram-platform">
                    <div className="watch-quiet-the">+91 99999 99999</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="watch-the-flim" />
      </div>
      <div className="copyright">
        <div className="createnary-20241">© Createnary 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
