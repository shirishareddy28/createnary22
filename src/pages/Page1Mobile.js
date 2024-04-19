import MainStructure from "../components/MainStructure";
import Hero from "../components/Hero";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import EarningsSummary from "../components/EarningsSummary";
import Property1Mobile from "../components/Property1Mobile";
import FAQs from "../components/FAQs";
import FAQItemTwo from "../components/FAQItemTwo";
import WalletFeatures from "../components/WalletFeatures";
import GroupComponent from "../components/GroupComponent";
import "./Page1Mobile.css";

const Page1Mobile = () => {
  return (
    <div className="page-1-mobile">
      <img
        className="function-tree-icon"
        alt=""
        src="/rectangle-160444@2x.png"
      />
      <MainStructure />
      <Hero />
      <FrameComponent4 />
      <FrameComponent3 />
      <EarningsSummary />
      <section className="frame-section">
        <div className="frequently-asked-questions-wrapper">
          <b className="frequently-asked-questions">
            FREQUENTLY ASKED QUESTIONS
          </b>
        </div>
        <div className="f-a-q-intro">
          <div className="quick-answers-to">
            Quick answers to questions you may have. Can’t find what you're
            looking for?
          </div>
        </div>
        <div className="f-a-q-item-one">
          <Property1Mobile
            property1MobilePosition="unset"
            property1MobileTop="unset"
            property1MobileLeft="unset"
          />
        </div>
        <div className="partners-header">
          <FAQs
            coibaseWallet="What kind of digital products can I sell?"
            icon="/icon.svg"
            fAQsBackgroundColor="#e6e6e6"
            fAQsWidth="unset"
            fAQsPosition="relative"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="bold"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="14px"
          />
        </div>
        <FAQItemTwo />
        <div className="partners-header1">
          <FAQs
            coibaseWallet="Is there a limit to the number of products I can list?"
            icon="/icon.svg"
            fAQsBackgroundColor="#e6e6e6"
            fAQsWidth="unset"
            fAQsPosition="relative"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="bold"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="14px"
          />
        </div>
        <WalletFeatures />
        <GroupComponent />
      </section>
    </div>
  );
};

export default Page1Mobile;
