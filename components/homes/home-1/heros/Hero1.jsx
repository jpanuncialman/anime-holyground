"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { parallaxMouseMovement } from "@/utlis/parallax";
import Image from "next/image";

import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

export default function Hero1() {
  useEffect(() => {
    parallaxMouseMovement();
  }, []);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        style={{ minHeight: "1080px" }}
        className="container d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120"
      >
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-6 d-flex align-items-center mb-sm-60">
              {/* <div>
                <h1 className="hs-title-1 mb-30">
                  <AnimatedText text={"Anime Holyground"} />
                </h1>

                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  Welcome to Anime Holyground, a first year DIY anime convention
                  found in the heart of queens! Hosted at the Stone Circle
                  Theater in Ridgewood, Anime Holyground puts con-goers on the
                  church-floor literally, to bask in ethereal glow as we all
                  come together to share our love for anime and Japanese
                  subculture!
                </p>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  <a
                    href="/programming"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
                  >
                    <span>Programming</span>
                  </a>
                  <a
                    href="/tickets"
                    className="link-hover-anim align-middle lightbox mfp-iframe mt-10"
                    data-link-animate="y"
                  >
                    <i className="icon-play size-13 me-1" /> Get Tickets
                  </a>
                </div>
              </div> */}
            </div>
            {/* End Home Section Text */}
            {/* Stack Images */}
            <div className="col-md-5 offset-md-1 d-flex align-items-center">
              {/* <div className="stack-images">
                <div
                  className="stack-images-1 parallax-mousemove"
                  data-offset={30}
                > */}
              {/* <div
                    className="wow clipRightIn"
                    data-wow-delay="1.2s"
                    data-wow-duration="1.75s"
                  > */}
              {/* <Image
                      src="/assets/images/anime-holyground-logo-church.png"
                      alt="Image Description"
                      width={800}
                      height={600}
                    /> */}
              {/* </div> */}
              {/* </div> */}
              {/* <div
                  className="stack-images-2 parallax-mousemove"
                  data-offset={60}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="1.7s"
                    data-wow-duration="1.75s"
                  >
                    <Image
                      width={600}
                      height={800}
                      src="/assets/images/stack-image-2.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div>
                <div
                  className="stack-images-3 parallax-mousemove"
                  data-offset={90}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="2.2s"
                    data-wow-duration="1.75s"
                  >
                    <Image
                      width={600}
                      height={800}
                      src="/assets/images/stack-image-3.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div> */}
              {/* </div> */}
            </div>
            {/* End Stack Images */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
