import React from "react";
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

function Footer() {
  return (
    <div>
      <section id="footer" >
        {/* <div class="container" > */}
          <div class="row" style={{ margin: "0rem 14rem", padding: "50px 0px" }}>
            <div class="col-8 col-12-medium">
              <section>
                <header>
                  <h2 class="footerHeader">Blandit nisl adipiscing</h2>
                </header>
                <div className="d-flex pb-2 pt-2">
                  <div class="d-flex justify-content-center align-items-end bg-danger pentagon2">
                    <span class="date">
                      Jan <strong>27</strong>
                    </span>
                  </div>
                  <div style={{paddingLeft:"25px"}}>
                    <h3>
                      <a href="#" class="footerText">
                        Lorem dolor sit amet veroeros
                      </a>
                    </h3>
                    <p id="para">
                      Ipsum dolor sit amet veroeros consequat blandit ipsum
                      phasellus lorem consequat etiam.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-2 pt-2">
                  <div class="d-flex justify-content-center align-items-end bg-danger pentagon2">
                    <span class="date">
                      Jan <strong>23</strong>
                    </span>
                    .
                  </div>
                  <div style={{paddingLeft:"25px"}}>
                    <h3>
                      <a href="#" class="footerText">
                        Ipsum sed blandit nisl consequat
                      </a>
                    </h3>
                    <p id="para">
                      Blandit phasellus lorem ipsum dolor tempor sapien tortor
                      hendrerit adipiscing feugiat lorem.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-2 pt-2">
                  <div class="d-flex justify-content-center align-items-end bg-danger pentagon2">
                    <span class="date">
                      Jan <strong>15</strong>
                    </span>
                  </div>
                  <div style={{paddingLeft:"25px"}}>
                    <h3>
                      <a href="#" class="footerText">
                        Magna tempus lorem feugiat
                      </a>
                    </h3>
                    <p id="para">
                      Dolore consequat sed phasellus lorem sed etiam nullam
                      dolor etiam sed amet sit consequat.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-2 pt-2">
                  <div class="d-flex justify-content-center align-items-end bg-danger pentagon2">
                    <span class="date">
                      Jan <strong>12</strong>
                    </span>
                  </div>
                  <div style={{paddingLeft:"25px"}}>
                    <h3>
                      <a href="#" class="footerText">
                        Dolore tempus ipsum feugiat nulla
                      </a>
                    </h3>
                    <p id="para">
                      Feugiat lorem dolor sed nullam tempus lorem ipsum dolor
                      sit amet nullam consequat.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-2 pt-2">
                  <div class="d-flex justify-content-center align-items-end bg-danger pentagon2">
                    <span class="date">
                      Jan <strong>10</strong>
                    </span>
                  </div>
                  <div style={{paddingLeft:"25px"}}>
                    <h3>
                      <a href="#" class="footerText">
                        Blandit tempus aliquam?
                      </a>
                    </h3>
                    <p id="para">
                      Feugiat sed tempus blandit tempus adipiscing nisl lorem
                      ipsum dolor sit amet dolore.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              <section>
                <header>
                  <h2 class="footerHeader">What's this all about?</h2>
                </header>
                <div
                  class="p-5 mb-5 d-flex justify-content-center align-items-center text-center bg-image"
                  style={{
                    backgroundImage: "url(../9.jpg)",
                    backgroundSize: "cover",
                    width: "340px",
                    height: "150px",
                  }}
                ></div>

                <a href="#" class="image featured">
                  <img src="images/pic10.jpg" alt="" />
                </a>
                <p style={{ textAlign: "start" }} id="para">
                  This is <strong>Dopetrope</strong> a free, fully responsive
                  HTML5 site template by
                  <a className="linkText" href="http://twitter.com/ajlkn">AJ</a> for{" "}
                  <a className="linkText" href="http://html5up.net/">HTML5 UP</a> It's released for
                  free under the{" "}
                  <a className="linkText"  href="http://html5up.net/license/">
                    Creative Commons Attribution
                  </a>{" "}
                  license so feel free to use it for any personal or commercial
                  project &ndash; just don't forget to credit us!
                </p>
                <footer style={{ textAlign: " start" }}>
                  <a href="#" class="btn btn-danger">
                    Find Out More
                  </a>
                </footer>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section>
                <header>
                  <h2 class="footerHeader">Tempus consequat</h2>
                </header>
                <div className="link">
                  <a className="linkText" href="#">
                    Lorem ipsum dolor sit amet sit veroeros
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Sed et blandit consequat sed tlorem blandit
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Adipiscing feugiat phasellus sed tempus
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Hendrerit tortor vitae mattis tempor sapien
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Sem feugiat sapien id suscipit magna felis nec
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Elit class aptent taciti sociosqu ad litora
                  </a>
                </div>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section>
                <header>
                  <h2 class="footerHeader">Ipsum et phasellus</h2>
                </header>
                <div className="link">
                  <a href="#" className="linkText">
                    Lorem ipsum dolor sit amet sit veroeros
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Sed et blandit consequat sed tlorem blandit
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Adipiscing feugiat phasellus sed tempus
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Hendrerit tortor vitae mattis tempor sapien
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Sem feugiat sapien id suscipit magna felis nec
                  </a>
                </div>
                <div className="link">
                  <a href="#" className="linkText">
                    Elit class aptent taciti sociosqu ad litora
                  </a>
                </div>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              <section>
                <header>
                  <h2 class="footerHeader">Vitae tempor lorem</h2>
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
                    <div
                      className="socialDiv"
                      style={{ background: " #2daae4" }}
                    >
                      <a href="#">
                        <FaTwitter
                          style={{ color: "white", fontSize: "2em" }}
                        ></FaTwitter>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="socialDiv"
                      style={{ background: "#c4376b" }}
                    >
                      <a href="facebook.com">
                        <FaDribbble
                          style={{ color: "white", fontSize: "2em" }}
                        ></FaDribbble>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="socialDiv"
                      style={{ background: "#2b4661" }}
                    >
                      <a href="#">
                        <FaTumblr
                          style={{ color: "white", fontSize: "2em" }}
                        ></FaTumblr>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="socialDiv"
                      style={{ background: "#006599" }}
                    >
                      <a href="#">
                        <FaLinkedin
                          style={{ color: "white", fontSize: "2em" }}
                        ></FaLinkedin>
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="d-flex">
                  <h3 class="footerText col-6 col-12-medium">Address</h3>
                  <p className="col-6 col-12-medium">
                    Untitled Incorporated
                    <br />
                    1234 Somewhere Road Suite
                    <br />
                    Nashville, TN 00000-0000
                  </p>
                </div>
                <div className="d-flex">
                  <h3 class="footerText col-6 col-12-medium">Mail</h3>
                  <p className="col-6 col-12-medium">
                    <a className="linkText" href="#">someone@untitled.tld</a>
                  </p>
                </div>
                <div className="d-flex">
                  <h3 class="footerText col-6 col-12-medium">Phone</h3>
                  <p className="col-6 col-12-medium">(800) 000-0000</p>
                </div>
              </section>
            </div>
            <div class="col-12">
              {/* <!-- Copyright --> */}
              <div id="copyright">
                <div className="footerRights">
                  &copy; Untitled. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Footer;
