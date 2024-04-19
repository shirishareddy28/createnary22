import HeaderDetails from "../components/HeaderDetails";
import HowItWorks from "../components/HowItWorks";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Footer1 from "../components/Footer1";
import "./Page2Mobile.css";

const Page2Mobile = () => {
  return (
    <div className="page-2-mobile">
      <section className="header-area">
        <div className="header-content">
          <HeaderDetails />
          <HowItWorks />
        </div>
      </section>
      <FrameComponent8 />
      <FrameComponent7 />
      <section className="wrapper-image-6-wrapper">
        <div className="wrapper-image-6">
          <img
            className="image-6-icon"
            loading="lazy"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </section>
      <FrameComponent6 />
      <section className="wrapper-image-7-wrapper">
        <div className="wrapper-image-7">
          <img
            className="image-7-icon"
            loading="lazy"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </section>
      <FrameComponent5 />
      <Footer1 />
    </div>
  );
};

export default Page2Mobile;
