import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
import Split from "./Split";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <Image
                    src="/assets/images/home/section-image-9.jpg"
                    alt="Image description"
                    width={500}
                    height={692}
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <Image
                    src="/assets/images/home/section-image-1.jpg"
                    alt="Image description"
                    width={500}
                    height={692}
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
              <div className="wow linesAnimIn" data-splitting="lines">
                <h3 className="h5">
                  Welcome to Anime Holyground, a first year DIY anime convention
                  found in the heart of queens!
                </h3>

                <p className="text-gray">
                  Hosted at the Stone Circle Theater in Ridgewood, Anime
                  Holyground puts con-goers on the church-floor literally, to
                  bask in ethereal glow as we all come together to share our
                  love for anime and Japanese subculture!
                </p>

                <p className="text-gray">
                  Every aspect of Anime Holyground has been carefully curated,
                  if not fully developed, by its showrunners, the mad-weebs
                  behinds Weeb Adjacent and Love & Mania, with an emphasis on
                  interactivity & community alongside a respect for otaku
                  tradition and the artform of Japanese media.
                </p>
              </div>
            </div>

            <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
              <div className="overflow-hidden">
                <Image
                  src="/assets/images/home/section-image-4.jpg"
                  alt="Image description"
                  width={330}
                  height={894}
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <Image
                    src="/assets/images/home/section-image-7.jpg"
                    alt="Image description"
                    width={500}
                    height={692}
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div
                  className="call-action-4-image-2"
                  data-rellax-y=""
                  data-rellax-speed="0.7"
                  data-rellax-percentage="0.25"
                >
                  <Image
                    src="/assets/images/home/section-image-6.jpg"
                    alt="Image description"
                    width={500}
                    height={692}
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={0}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
              <div className="wow linesAnimIn" data-splitting="lines">
                <p className="lead mt-0 mb-40">
                  We’re proud of our unique selection of artists & vendors and
                  the exciting, diverse, and often interactive slew of
                  programming which will range from panels, to workshops, to
                  interactive stage plays & anime live scoring! Of course no con
                  is complete without its rave, and we’ve hand-crafted the
                  afterparty too.
                </p>
                <p className="text-gray mb-40">
                  Anime Holyground is a first year event but its being put
                  together by a team who are no stranger to event running & weeb
                  community alike, and it’s our expression of thanks for
                  everyone and everything that’s allowed us to develop something
                  wholly unique in the otaku space while still offering a day of
                  wonder for hardcore fans and casual watchers alike.
                </p>
              </div>
              {/* <div className="local-scroll wow fadeInUp" data-wow-offset={0}>
                <Link
                  href={`/marketplace`}
                  className="btn btn-mod btn-large btn-round btn-hover-anim"
                >
                  <span>Marketplace</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-30">
        <div id="paddingRightContainer" className="container" />
        <div className="row g-0">
          <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              id="paddingRight"
              className={`split-column-right ${
                dark ? "bg-dark-2" : "bg-dark-1"
              } light-content position-relative d-flex align-items-center`}
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                  We hope you’ll consider coming to our show!
                </h2>
                <p className="mb-50">
                  All this on the beautiful church floor of the Ridgewood
                  Presbyterian Church courtesy of Stone Circle Theater.
                </p>
                {/* Features List */}
                <div className="row mt-n20">
                  {/* Features List Item */}
                  {/* {featuresListData.map((item, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{item.text}</div>
                    </div>
                  ))} */}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
            <div className="split-image-left">
              <Image
                width={1100}
                height={930}
                src="/assets/images/home/section-image-8.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>{" "}
        <Split />
      </section>
    </>
  );
}
