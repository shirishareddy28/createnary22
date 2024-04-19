import "./EarningsSummary.css";

const EarningsSummary = () => {
  return (
    <section className="earnings-summary">
      <div className="earnings-values">
        <div className="earnings-header">
          <b className="monthly-earning">Monthly Earning</b>
          <b className="yearly-earning">Yearly Earning</b>
        </div>
        <div className="earnings-amount">
          <b className="b4">₹12,000</b>
          <b className="b5">₹1,44,000</b>
        </div>
      </div>
    </section>
  );
};

export default EarningsSummary;
