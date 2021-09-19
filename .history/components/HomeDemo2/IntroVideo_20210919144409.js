import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import Link from "next/link";

const IntroVideo = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="video-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="intro-video-content">
                <span className="sub-title">HOW DOES IT WORK?</span>
                <h2>Watch Our Video On How Opren Really Works</h2>
                <p>
                  The controller, which can be quite sophisticated and serves as
                  the system's brain, is at the heart of either a microgrid or a
                  minigrid. Microgrid controllers can be configured to perform
                  various functions through both hardware configuration and
                  software programming, and in grid-connected systems, they can
                  be used to generate revenue by selling energy back to the grid
                  or providing other ancillary services to the utility,
                  depending on local market rules and utility programs. To meet
                  emissions reduction goals, microgrid controllers can also be
                  programmed to use the cleanest available energy resources from
                  among the installed onsite options.
                </p>

                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="intro-video-box">
                <img src="/images/video/Placeholder.png" alt="video-img" />

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  className="video-btn popup-youtube"
                ></div>

                <div className="shape">
                  {/* <img
                    className="shape10"
                    src="/images/shape/shape13.png"
                    alt="image"
                  /> */}
                  {/* <img
                    className="shape11"
                    src="/images/shape/shape14.png"
                    alt="image"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default IntroVideo;
