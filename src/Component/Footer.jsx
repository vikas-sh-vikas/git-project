import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Headers } from "react-bootstrap";
import "../App.css";
import {
  FaBolt,
  FaCog,
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaTumblr,
  FaLinkedin,
} from "react-icons/fa";
import footerDayData from "./Json/footerdayData.json";
import companyInfo from "./Json/companyDetail.json";
import footerLinkData from "./Json/footerLink.json";

function Footer() {
  const footerObj = footerDayData;
  const InfoObj = companyInfo;
  const linkObj = footerLinkData;

  return (
    <div>
      <section
        className="d-flex justify-content-center align-items-center"
        id="footer"
      >
        <div class="row container1" style={{ padding: "50px 0px" }}>
          <div class="col-lg-8 col-md-12 col-sm-12">
            <section>
              <header>
                <h2 class="footerHeader">
                  {footerObj.footerDayData[0].header}
                </h2>
              </header>
              {footerObj.footerDayData.map((item) => {
                return (
                  <div className="d-flex pb-2 pt-2">
                    <div>
                      <div class="d-flex justify-content-center align-items-end bg-danger pentagon2">
                        <span class="date">
                          {item.month} <strong>{item.day}</strong>
                        </span>
                      </div>
                    </div>
                    <div style={{ paddingLeft: "25px" }}>
                      <h3>
                        <a href="#" class="footerText">
                          {item.title}
                        </a>
                      </h3>
                      <p className="FooterPara">{item.paragraph}</p>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
          <div class="col-lg-4 col-md-12-col-sm-12">
            <section>
              <header>
                <h2 class="footerHeader">{InfoObj.companyInfo[0].header}</h2>
              </header>
              <div
                class="p-5 mb-5 d-flex justify-content-center align-items-center text-center bg-image"
                style={{
                  backgroundImage: `url(${InfoObj.companyInfo[0].src})`,
                  backgroundSize: "cover",
                  position: "relative",
                  backgroundPosition: "center center",
                  width: "auto",
                  left: "1.75em",
                  top: "1.75em",
                  margin: "-2.5em 30px 4.25em -1.5em",
                }}
              ></div>
              <p style={{ textAlign: "start" }} id="para">
                {InfoObj.companyInfo[0].paragraph1}
                <a className="linkText" href="http://twitter.com/ajlkn">
                  {InfoObj.companyInfo[0].link1}
                </a>{" "}
                for{" "}
                <a className="linkText" href="http://html5up.net/">
                  {InfoObj.companyInfo[0].link2}
                </a>{" "}
                It's released for free under the{" "}
                <a className="linkText" href="http://html5up.net/license/">
                  {InfoObj.companyInfo[0].link3}
                </a>{" "}
                {InfoObj.companyInfo[0].paragraph1}
              </p>
              <footer style={{ textAlign: " start" }}>
                <a href="#" class="btn btn-danger">
                  Find Out More
                </a>
              </footer>
            </section>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <section>
              <header>
                <h2 class="footerHeader">
                  {linkObj.footerLinkData[0].linkData[0].header}
                </h2>
              </header>
              {linkObj.footerLinkData[0].linkData.map((item) => {
                return (
                  <div className="link">
                    <a className="linkText" href="#">
                      {item.paragraph}
                    </a>
                  </div>
                );
              })}
            </section>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <section>
              <header>
                <h2 class="footerHeader">
                  {linkObj.footerLinkData[0].linkData1[0].header}
                </h2>
              </header>
              {linkObj.footerLinkData[0].linkData1.map((item) => {
                return (
                  <div className="link">
                    <a href="#" className="linkText">
                      {item.paragraph}
                    </a>
                  </div>
                );
              })}
            </section>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <section>
              <header>
                <h2 class="footerHeader">{InfoObj.companyInfo[0].header2}</h2>
              </header>
              <ul class="social d-flex">
                <li>
                  <div className="socialDiv" style={{ background: "#888" }}>
                    <a href="#">
                      <FaFacebookF
                        style={{ color: "white", fontSize: "2em" }}
                      ></FaFacebookF>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="socialDiv" style={{ background: " #2daae4" }}>
                    <a href="#">
                      <FaTwitter
                        style={{ color: "white", fontSize: "2em" }}
                      ></FaTwitter>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="socialDiv" style={{ background: "#c4376b" }}>
                    <a href="facebook.com">
                      <FaDribbble
                        style={{ color: "white", fontSize: "2em" }}
                      ></FaDribbble>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="socialDiv" style={{ background: "#2b4661" }}>
                    <a href="#">
                      <FaTumblr
                        style={{ color: "white", fontSize: "2em" }}
                      ></FaTumblr>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="socialDiv" style={{ background: "#006599" }}>
                    <a href="#">
                      <FaLinkedin
                        style={{ color: "white", fontSize: "2em" }}
                      ></FaLinkedin>
                    </a>
                  </div>
                </li>
              </ul>
              <div className="d-flex">
                <h3 class="footerText col-4 col-12-medium">Address</h3>
                <p className="col-8 col-12-medium">
                  {InfoObj.companyInfo[0].address}
                  <br />
                  {InfoObj.companyInfo[0].address1}
                  <br />
                  {InfoObj.companyInfo[0].address2}
                </p>
              </div>
              <div className="d-flex">
                <h3 class="footerText col-4 col-12-medium">Mail</h3>
                <p className="col-8 col-12-medium">
                  <a className="linkText" href="#">
                    {InfoObj.companyInfo[0].mail}{" "}
                  </a>
                </p>
              </div>
              <div className="d-flex">
                <h3 class="footerText col-4 col-12-medium">Phone</h3>
                <p className="col-8 col-12-medium">
                  {InfoObj.companyInfo[0].phone}
                </p>
              </div>
            </section>
          </div>
          <div class="col-12">
            <div id="copyright">
              <div className="footerRights">
                &copy; Untitled. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
