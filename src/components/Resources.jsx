import React from "react";

const Resources = () => {
  return (
    <>
      <div className="resources-container" id="resources">
        <h2 className="resources-headline">Free Resources</h2>
        <p>
          Having access to free resources is important. Not everyone can afford
          to take my paid-for services and ensuring you can get free resources
          to help you improve is super important to me.
        </p>
        <div className="resources-card">
          <img
            src="/RMP-forge-icon.png"
            alt="image of free digital portfolio resources"
            className="resources-img"
          />
          <div className="resources-text">
            <h4>Rate My Portfolio (YouTube)</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, eveniet!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, eveniet!
            </p>
            <a href="https://www.youtube.com/channel/UCToVTVrRrX4Zke2_WjrCgjQ">
              <button className="resources-btn-link">Explore</button>
            </a>
          </div>
        </div>
        {/* card 2 */}

        <div className="resources-card">
          <img
            src="/atomic-forge-icon.png"
            alt="image of free digital portfolio resources"
            className="resources-img"
          />
          <div className="resources-text">
            <h4>
              Atomic Porfolio{" "}
              <span>(* The small but powerful portfolio template!)</span>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, eveniet!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, eveniet!
            </p>
            <a href="https://www.atomicportfolios.com/">
              <button className="resources-btn-link">Explore</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
