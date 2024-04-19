import "./FAQItemTwo.css";

const FAQItemTwo = () => {
  return (
    <div className="f-a-q-item-two">
      <div className="div2">
        <div className="faq">
          <div className="do-i-need-technical-skills-to-parent">
            <b className="do-i-need">
              Do I need technical skills to use the platform?
            </b>
            <img className="icon2" loading="lazy" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="line" />
        <div className="no-not-at">
          No, not at all! Our platform is designed with user-friendliness in
          mind. You can easily navigate and set up your store without any
          technical expertise. It's as simple as a few clicks to get started!
        </div>
      </div>
    </div>
  );
};

export default FAQItemTwo;
