import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <div className="share-the-holidays-stays-and-parent">
      <h3 className="share-the-holidays">
        Share the holidays, stays and experiences with your friends and family
      </h3>
      <div className="you-receive-trending-container">
        <p className="you-receive-trending">{`You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share`}</p>
      </div>
      <div className="wrapper-image-5">
        <img
          className="image-5-icon"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
