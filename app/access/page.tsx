import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { animeHolygroundLinks } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
export const metadata = {
  title: "Access | Anime Holyground",
  description:
    "Learn how to reach the new NYC anime convention Anime Holyground, based in Ridgwood, NY's Stone Circle Theatre",
};
export default function AccessPage() {
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
                      "url(/assets/images/pagebg/access-pagebg.jpg)",
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
                              <AnimatedText text="Access" />
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
                        src="/assets/images/banners/banner-access.png"
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
                      Stone Circle Theatre is a part of the Ridgewood
                      Presbyterian Church, found in Ridgewood Queens.
                    </span>
                  </p>
                  <div style={{ width: "100%" }}>
                    <iframe
                      width="100%"
                      height="600"
                      // frameborder="0"
                      scrolling="no"
                      // marginheight="0"
                      // marginwidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=59-14%2070th%20Ave,%20Ridgewood,%20NY%2011385+(Stone%20Circle%20Theatre)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                        Estimer la population sur la carte
                      </a>
                    </iframe>
                  </div>
                  <p>
                    Those taking the Subway, take the M Train to Forest Av, walk
                    down Forest Avenue until you hit 70th street, and the venue
                    will be right to your left.
                  </p>
                  <p>
                    You can also take either the Q39 or Q55 bus to the Forest
                    Ave / Myrtle Ave cross section which lets off just a minute
                    away from the venue!
                  </p>
                  <h5>Address:</h5>
                  <p>
                    <span>
                      59-14 70th Avenue, Ridgewood, New York 11385, United
                      States
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
