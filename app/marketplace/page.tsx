import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import { animeHolygroundLinks } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
export const metadata = {
  title:
    "Home 1 Main Demo MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MarketplacePage() {
  return (
    <>
      <div className="theme-main">
        {" "}
        <div className="theme-main">
          <div className="page" id="top">
            <nav className="main-nav stick-fixed wow-menubar">
              <Header2 links={animeHolygroundLinks} />
            </nav>{" "}
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-gray-light-1 bg-light-alpha-30 parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/pagebg/marketplace-pagebg.jpg)",
                  }}
                >
                  <div className="container position-relative pt-50 pb-100 pb-sm-20">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          {/* <h2
                            className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                            data-wow-duration="1.2s"
                          >
                            Our Mission
                          </h2> */}
                          <h1 className="hs-title-1 mb-30">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Marketplace" />
                            </span>
                          </h1>
                          <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                              {/* <p
                                className="section-descr mb-0 wow fadeInUp"
                                data-wow-delay="0.6s"
                                data-wow-duration="1.2s"
                              >
                                We are a full-service creative studio creating
                                beautiful digital experiences and products.
                              </p> */}
                            </div>
                          </div>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </ParallaxContainer>
                <div className="page-section pt-0 pb-0">
                  <div className="container">
                    <div className="mt-n120 mt-n60 overflow-hidden">
                      <Image
                        src="/assets/images/banners/banner-marketplace.png"
                        alt="Image Description"
                        width={1920}
                        height={1080}
                        className="wow scaleOutIn"
                        data-wow-duration="1.2s"
                        data-wow-offset={0}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="page-section">
                <div className="container position-relative">
                  <p>
                    <span>
                      Anime Holyground is proud to bring to attendees a curated
                      selection of artists and vendors to the Stone Circle
                      Theater church floor marketplace.&nbsp;
                    </span>
                  </p>
                  <p>
                    <span>
                      Attendees will soak in the cool atmosphere of the church
                      while strolling around the bright marketplace, filled with
                      a hand-picked slew of distinct artists and inspired
                      purveyors we love.
                    </span>
                  </p>
                  <p>
                    <span>
                      We want to showcase a large variety of artists and goodies
                      that both take from anime while simultaneously expressing
                      their own inner world! We&rsquo;re confident that any and
                      every attendee will find something novel and genuine to
                      bring home.
                    </span>
                  </p>
                  <p>
                    <span>
                      The Anime Holyground Marketplace will be open until
                      Evening Programming begins, giving attendees plenty of
                      time to peruse sub-cultural goodies on the floor of the
                      church!
                    </span>
                  </p>
                  <p>
                    <span>
                      Full vendor list will be made available in late September!
                    </span>
                  </p>
                </div>
              </section>
            </main>
            <Footer1 />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
