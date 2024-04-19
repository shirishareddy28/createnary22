import "./Guideline.css";

const Guideline = () => {
  return (
    <div className="guideline">
      <div className="page-should-be-container">
        <ul className="page-should-be-responsive-padd">
          <li className="page-should-be">{`Page should be responsive paddings are given on the `}</li>
          <li className="nav-bar-should">
            nav bar should collapse with hamburger icon once switched to tablet
            view.
          </li>
          <li className="the-nav-bar">the nav bar is with glass effect.</li>
          <li className="search-should-have">{`search should have drop down `}</li>
          <li className="same-page-should">
            Same page should responsive enough to be converted in mobile view.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Guideline;
