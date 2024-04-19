import "./Frame1.css";

const Frame1 = () => {
  return (
    <div className="the-calculation-should-come-fr-parent">
      <div className="the-calculation-should-container">
        <ul className="the-calculation-should-come-fr">
          <li className="the-calculation-should">{`the calculation should come from backend `}</li>
          <li className="for-one-10k">{`for one 10k follower and 1 product its 1000 rs earning `}</li>
          <li className="k-followers-1">
            20k followers 1 product - 2k earning
          </li>
          <li className="k-followers-2">
            10k followers 2 product - 2k earning
          </li>
          <li className="k-followers-21">
            20k followers 2 product - 3k earning
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Frame1;
