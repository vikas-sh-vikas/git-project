import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
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
import Footer from "./Footer";
import cardData1 from "./Json/leftSideCard1.json";
import cardData2 from "./Json/leftSideCard2.json";
import cardData3 from "./Json/leftSideCard3.json";

function LeftSideBar() {
  const CardObj1 = cardData1;
  const CardObj2 = cardData2;
  const CardObj3 = cardData3;

  return (
    <div>
      <div className="divBack  d-flex justify-content-center align-items-center">
        <div className="container1" style={{ padding: "50px 0px" }}>
          <div className="row" style={{ paddingBottom: "24px" }}>
            <div class="col-lg-4 col-md-12-col-sm-12 order-lg-1 order-md-2 order-sm-2">
              <div style={{ paddingBottom: "24px" }}>
                <div class="card padding-0">
                  <div class="card-body p-0">
                    <div
                      class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                      style={{
                        backgroundImage: `url(${CardObj2.card2[0].src})`,
                        backgroundSize: "cover",
                        height: "260px",
                      }}
                    ></div>
                    <div style={{ padding: "44px 28px", textAlign: "left" }}>
                      <h5 class="portfolioHeader">
                        {CardObj2.card2[0].header1}
                      </h5>
                      <p class="card-text" id="portPara">
                        {CardObj2.card2[0].paragraph1}
                      </p>
                      <a href="#" id="cardButton" class="btn btn-dark">
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ paddingBottom: "24px" }}>
                <div class="card text-center padding-0">
                  <div class="card-body p-0">
                    <div style={{ padding: "44px 28px", textAlign: "left" }}>
                      <h5 class="portfolioHeader">
                        {CardObj3.card3[0].header1}
                      </h5>
                      <p class="card-text" id="portPara">
                        {CardObj3.card3[0].paragraph1}
                      </p>
                      <div style={{ paddingBottom: "32px" }}>
                        <div className="linkTextLeftbar">
                          <a href="#">{CardObj3.card3[0].link1} </a>
                        </div>
                        <div className="linkTextLeftbar">
                          <a href="#">{CardObj3.card3[0].link2} </a>
                        </div>
                        <div className="linkTextLeftbar">
                          <a href="#">{CardObj3.card3[0].link3} </a>
                        </div>
                        <div className="linkTextLeftbar">
                          <a href="#">{CardObj3.card3[0].link4} </a>
                        </div>
                      </div>
                      <a href="#" id="cardButton" class="btn btn-dark">
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-12-col-sm-12 order-lg-2 order-md-1 order-sm-1">
              <div style={{ paddingBottom: "24px" }}>
                <div class="card text-center">
                  <div class="card-body p-0">
                    <div
                      class="p-5 mb-5 d-flex justify-content-center align-items-center text-center bg-image"
                      style={{
                        backgroundImage: `url(${CardObj1.card1[0].src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundSize: "auto 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "260px",
                      }}
                    ></div>
                    <div style={{ padding: "44px 28px", textAlign: "left" }}>
                      <h2 class="LeftHeader">{CardObj1.card1[0].header1}</h2>

                      <p class="card-text" id="paraHeader">
                        {CardObj1.card1[0].paragraph1}
                      </p>
                      <p class="card-text" id="portPara">
                        {CardObj1.card1[0].paragraph2}{" "}
                      </p>
                      <p class="card-text" id="portPara">
                        {CardObj1.card1[0].paragraph3}{" "}
                      </p>
                      <h5 class="portfolioHeader">
                        {CardObj1.card1[0].header2}
                      </h5>
                      <p class="card-text" id="portPara">
                        {CardObj1.card1[0].paragraph4}
                      </p>
                      <p class="card-text" id="portPara">
                        {CardObj1.card1[0].paragraph5}{" "}
                      </p>
                      <h5 class="portfolioHeader">
                        {CardObj1.card1[0].header3}
                      </h5>
                      <p class="card-text" id="portPara">
                        {CardObj1.card1[0].paragraph6}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LeftSideBar;
