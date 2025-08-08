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
export default function TicketsPage() {
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
                      "url(/assets/images/pagebg/tickets-pagebg.jpg)",
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
                              <AnimatedText text="Tickets" />
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
                        src="/assets/images/banners/banner-tickets.png"
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
                    Thanks for your interest in Anime Holyground! We&rsquo;re a
                    first year DIY experience so every bit of support helps!
                  </p>
                  <p>
                    <span>
                      Tickets for Anime Holyground are extremely limited due to
                      the size of the venue and the DIY nature of the event! If
                      you want to ensure your spot at Anime Holyground, we
                      highly recommend preregistering in advance!
                    </span>
                  </p>
                  <p>
                    <span>
                      Door tickets may not be available either depending on how
                      many attendees preregister so get yours now and join us
                      for a holy weeaboo subcultural experience!
                    </span>
                  </p>
                  <p>
                    <span>
                      Please note this is an all ages DIY event hosted at a
                      church and while we all like to have a good time at cons,
                      we humbly ask congoers to refrain from sneaking in
                      alcohol, THC products, and other paraphernalia. As it puts
                      the event &amp; venue in legal danger, there will be a 0
                      strike policy for such occurrences.
                    </span>
                  </p>
                  <p>
                    <strong>Anime Holyground General Admission Tickets</strong>
                  </p>
                  <ul>
                    <li>
                      <span>Pre-Reg Price: $35</span>
                    </li>
                    <li>
                      <span>Door Price: $40</span>
                    </li>
                  </ul>
                  {/*<p>
                    <strong>Anime Holyground VIP Tickets</strong>
                  </p>
                  <p>
                    <span>
                      For those who truly want the Anime Holyground experience
                      to have as much polish as possible! We&rsquo;re forever in
                      the debt of anyone who wants to support us at this level!
                    </span>
                  </p>
                  <p>
                    <span>The VIP Ticket Package Includes</span>
                  </p>
                  <ul>
                    <li>
                      <span>Pre-Reg Badge</span>
                    </li>
                    <li>
                      <span>Front Pew Access For Evening Events</span>
                    </li>
                    <li>
                      <span>Official Anime Holyground T-Shirt</span>
                    </li>
                    <li>
                      <span>Ticket For The Anime Holyground After Party</span>
                    </li>
                  </ul>
                  <p>
                    <span>VIP Ticket Package Price $100</span>
                  </p>
                  <p>
                    <span>Limited To 10!</span>
                  </p>
                  <p>
                    <span>
                      Live ticketing is hosted by our partners at Stone Circle
                      theater!
                    </span>
                  </p>
                  <p>
                    <br />
                    <br />
                  </p>*/}
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
