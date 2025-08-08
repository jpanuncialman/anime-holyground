"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";
import { animeHolygroundLinks } from "@/data/menu";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/"} className="mb-30">
              <Image
                src="/assets/images/anime-holyground-logo.png"
                width={210}
                height={68}
                className="light-mode-logo"
                alt="Anime Holyground Logo"
              />

              <Image
                src="/assets/images/anime-holyground-logo.png"
                width={210}
                height={68}
                className="dark-mode-logo"
                alt="Anime Holyground Logo"
              />
            </Link>
            {/* <p>
              Integer auctor aliquet martor, sed lorem malesuada eros blandit
              eget. Proin lacinia mortoc id odio vestibulum.
            </p> */}
            <div className="clearlinks">
              <strong>E.</strong>
              <a href="mailto:contact@animeholyground.com">
                contact@animeholyground.com
              </a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Site Nav</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {animeHolygroundLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Social Media</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              {/* <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal &amp; Press</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        {/* <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>© IB-Themes {new Date().getFullYear()}.</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Based in London, United Kingdom.</b>
            {/* Back to Top Link */}
        {/* <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div> */}
        {/* End Back to Top Link */}
        {/* </div>
        </div> */}
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
