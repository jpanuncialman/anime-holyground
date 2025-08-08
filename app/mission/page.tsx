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
  title:
    "Home 1 Main Demo MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MissionPage() {
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
                      "url(/assets/images/pagebg/mission-page-bg.jpg)",
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
                              <AnimatedText text="Our Mission" />
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
                        src="/assets/images/banners/banner-mission.png"
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
                    Anime Holyground comes from the combined delirium of minds
                    behind NYC’s most unhinged anime-nightlife event series Weeb
                    Adjacent and all around otaku curator & archivist Love &
                    Mania.
                  </p>

                  <p>
                    Not satisfied with the current diluted course of mainstream
                    convention offerings, Anime Holyground was born from the
                    marriage of our deep passion for Japanese visual art along
                    with the subculture derived from it with a shared desire to
                    manifest its community back offline.
                  </p>

                  <p>
                    We’re putting our decades of experience with the community
                    alongside our blood, guts, and souls into making this first
                    of its kind anime event that’s part weeb vibes, part otaku
                    history, and all communal!
                  </p>

                  <p>
                    Every aspect of Anime Holyground, from the diverse
                    interactive programming to the wide range artists & vendors,
                    was hand-curated by the core team behind the event.
                  </p>

                  <p>
                    With volunteers for the first year effort also hand-picked
                    by us, we’re confident that everyone involved with this DIY
                    Anime Convention is united in bringing this communal weeaboo
                    vision to life!
                  </p>

                  <p>
                    Despite being a fully secular event, we’re enthusiastic to
                    be able to bring this day to life in the gorgeous Ridgewood
                    Presbyterian Church space in conjunction with Stone Circle
                    Theater.
                  </p>

                  <p>
                    Cosplay under the filtered light of stained glass will hit
                    different!
                  </p>

                  <p>
                    We invite you to join us for the inaugural Anime Holyground
                    and experience for yourselves a unique real life
                    manifestation of this precious subculture!
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
