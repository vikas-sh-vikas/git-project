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

function NoSidebar() {
  const CardObj1 = cardData1;

  return (
    <div>
      <div className="divBack d-flex justify-content-center align-items-center">
        <div className="container1" style={{ padding: "50px 0px" }}>
          <Row style={{ paddingBottom: "24px" }}>
            <Col md={12}>
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
                      height: "400px",
                    }}
                  ></div>
                  <div style={{ padding: "44px 28px", textAlign: "left" }}>
                    <h2 class="LeftHeader">{CardObj1.card1[0].headerN}</h2>

                    <p class="card-text" id="paraHeader">
                      {CardObj1.card1[0].paragraph1}
                    </p>
                    <p class="card-text" id="portPara">
                      {CardObj1.card1[0].paragraph2}{" "}
                    </p>
                    <p class="card-text" id="portPara">
                      {CardObj1.card1[0].paragraph3}{" "}
                    </p>
                    <h5 class="portfolioHeader">{CardObj1.card1[0].header2}</h5>
                    <p class="card-text" id="portPara">
                      {CardObj1.card1[0].paragraph4}
                    </p>
                    <p class="card-text" id="portPara">
                      {CardObj1.card1[0].paragraph5}
                    </p>
                    <h5 class="portfolioHeader">{CardObj1.card1[0].header3}</h5>
                    <p class="card-text" id="portPara">
                      {CardObj1.card1[0].paragraph6}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NoSidebar;
