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
import Hero5 from "@/components/homes/home-1/heros/Hero5";
export const metadata = {
  title: "Anime Holyground | DIY Anime Convention in Queens, NYC",
  description:
    "Welcome to Anime Holyground, a first-year DIY anime convention in Ridgewood, Queens, NYC!",
};
export default function Home1MainDemoMultiPageDark() {
  return (
    <>
      <div className="theme-main">
        {" "}
        <div className="theme-main">
          <div className="page" id="top">
            <nav className="main-nav transparent stick-fixed wow-menubar">
              <Header2 links={animeHolygroundLinks} />
            </nav>{" "}
            <main id="main">
              <ParallaxContainer
                className="home-section-custom home-section bg-gray-light-1 bg-light-alpha-30 parallax-mousemove-scene scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/home/home-hero-no-text.png)",
                  backgroundSize: "100%",
                  backgroundPosition: "top center",
                }}
                id="home"
              >
                <Hero5 />
              </ParallaxContainer>
              <Home1 />
            </main>
            <Footer1 />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}

// export default function Home1MainDemoMultiPage() {
//   return (
//     <>
//       <div className="theme-main">
//         <div className="page" id="top">
//           <nav className="main-nav transparent stick-fixed wow-menubar">
//             <Header1Multipage links={menuItems} />
//           </nav>
//           <main id="main">
//             <ParallaxContainer
//               className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
//               style={{
//                 backgroundImage:
//                   "url(/assets/images/full-width-images/section-bg-1.jpg)",
//               }}
//               id="home"
//             >
//               <Hero1 />
//             </ParallaxContainer>
//             <Home1 />
//           </main>
//           <Footer1 />
//         </div>{" "}
//       </div>
//     </>
//   );
// }
