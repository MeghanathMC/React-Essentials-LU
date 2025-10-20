const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-info">
              <div className="shimmer-line shimmer-title"></div>
              <div className="shimmer-line shimmer-subtitle"></div>
              <div className="shimmer-line shimmer-text"></div>
              <div className="shimmer-line shimmer-text"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
