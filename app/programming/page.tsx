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
export default function ProgrammingPage() {
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
                      "url(/assets/images/pagebg/programming-pagebg.jpg)",
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
                              <AnimatedText text="Programming" />
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
                        src="/assets/images/banners/banner-programming.png"
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
                      Anime Holyground is proud to offer a wide variety of
                      programming that&rsquo;s either entirely hand-developed or
                      hand-curated by the team!
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Daytime Programming</strong>
                  </p>
                  <p>
                    <span>
                      Enjoy more passive content during the day right in the
                      pews of the church like anime karaoke, an eclectic and
                      inspired selection of video content, and The Weeb Soapbox
                      that allow you to bathe in your love for anime while
                      basking in the holy atmosphere of the cathedral.&nbsp;
                    </span>
                  </p>
                  <p>
                    <span>
                      Meeting rooms within the Stone Circle Theater venue will
                      host a variety of hand-curated panels and workshops by
                      some of our most trusted otaku expert friends &amp;
                      charismatic weeaboo personalities.
                    </span>
                  </p>
                  <p>
                    <span>
                      Express yourself and learn a thing or two along the way!
                    </span>
                  </p>
                  <p>
                    <strong>Evening Programming&nbsp;</strong>
                  </p>
                  <p>
                    <span>
                      We&rsquo;re especially excited for our main events block
                      in the evening that&rsquo;ll all unfurl on the church
                      stage so far including!&nbsp;
                    </span>
                    &nbsp;
                  </p>
                  <ul>
                    <li>
                      <span>
                        Cosplay&amp; Larp with the an interactive masquerade
                        stage play centered around a certain Anti-Hero Hedgehog
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>
                        Test your otaku mettle in the Queen&rsquo;s Greatest
                        Otaku Gameshow
                      </span>
                    </li>
                    <li>
                      <span>
                        Enjoy a variety anime live scored by the keys &amp;
                        chords genius Maxo
                      </span>
                    </li>
                  </ul>
                  <p>
                    <span>
                      We&rsquo;ve placed an emphasis on performer creativity
                      &amp; audience interactivity while developing the above
                      programming block which aims to give congoers a communal
                      experience they won&rsquo;t find elsewhere!
                    </span>
                  </p>
                  <p>
                    <span>
                      Whether you&rsquo;re the type who enjoys rigorously
                      researched anime panels or just want to kick back and have
                      a great time, we&rsquo;re sure Anime Holyground has
                      something for you
                    </span>
                  </p>
                  <p>The full schedule will be revealed in late September!</p>
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
