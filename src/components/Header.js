import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content1">
        <b className="createnary1">Createnary</b>
        <div className="header-options">
          <img
            className="frame-icon5"
            loading="lazy"
            alt=""
            src="/frame7.svg"
          />
        </div>
      </div>
      <div className="variable-holder-parent">
        <img
          className="variable-holder-icon"
          loading="lazy"
          alt=""
          src="/frame8.svg"
        />
        <div className="search-field-area">
          <div className="search-creators1">Search Creators</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
