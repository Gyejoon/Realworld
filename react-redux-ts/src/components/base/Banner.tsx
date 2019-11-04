import React from 'react';

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
