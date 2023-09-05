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

function RightSidebar() {
  return (
    <div>
      <Navbar />

      {/* </Row> */}
      <div className="divBack">
        <div style={{ margin: "0rem 14rem", padding: "50px 0px" }}>
          {/* <div className="d-flex" style={{ width: "100%" }}> */}
          <Row style={{ paddingBottom: "24px" }}>
            {/* <div className="box1" style={{ width: "33.33%" }}> */}

            {/* </div> */}
            <Col md={8}>
              <div class="card text-center">
                <div class="card-body p-0">
                  <div
                    class="p-5 mb-5 d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../Untitled.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundSize: "auto 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "260px",
                    }}
                  ></div>
                  <div style={{ padding: "44px 28px", textAlign: "left" }}>
                    <h2 class="LeftHeader">Left Sidebar</h2>

                    <p class="card-text" id="paraHeader">
                    Lorem ipsum dolor sit amet feugiat
                    </p>
                    <p class="card-text" id="portPara">
                    Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo. Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante. Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
                    </p>
                    <p class="card-text" id="portPara">
                    Praesent a dolor leo. Duis in felis in tortor lobortis volutpat et pretium tellus. Vestibulum ac ante nisl, a elementum odio. Duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis. placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc, eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet nullam consequat feugiat dolore tempus.                    </p>
                    <h5 class="portfolioHeader">Something else</h5>
                    <p class="card-text" id="portPara">
                    Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis. placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc, eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet nullam consequat feugiat dolore tempus.
                    </p>
                    <p class="card-text" id="portPara">
                    Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc, eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet nullam consequat feugiat dolore tempus.                    </p>
                    <h5 class="portfolioHeader">So in conclusion ...</h5>
                    <p class="card-text" id="portPara">
                    Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc, eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet nullam consequat feugiat dolore tempus. Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div style={{ paddingBottom: "24px" }}>
                <div class="card padding-0">
                  <div class="card-body p-0">
                    <div
                      class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                      style={{
                        backgroundImage: "url(../8.jpg)",
                        backgroundSize: "cover",
                        height: "260px",
                      }}
                    ></div>
                    <div style={{ padding: "44px 28px", textAlign: "left" }}>
                      <h5 class="portfolioHeader">Ipsum feugiat et dolor</h5>
                      <p class="card-text" id="portPara">
                        Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                        consequat veroeros lorem blandit adipiscing et feugiat
                        phasellus tempus dolore ipsum lorem dolore.
                      </p>
                      <a href="#" id="cardButton" class="btn btn-dark">
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card text-center padding-0">
                <div class="card-body p-0">
                  <div style={{ padding: "44px 28px", textAlign: "left" }}>
                    <h5 class="portfolioHeader">Lorem ipsum</h5>
                    <p class="card-text" id="portPara">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta quisquam sapiente, molestiae aliquid fugit repellat
                      nostrum. Doloribus sunt consequatur fugit sapiente,
                      doloremque recusandae soluta nobis.
                    </p>
                    <div style={{ paddingBottom: "32px" }}>
                      <div className="linkTextLeftbar">
                        <a href="#">Sed et blandit consequat sed</a>
                      </div>
                      <div className="linkTextLeftbar">
                        <a href="#">Hendrerit tortor vitae sapien dolore</a>
                      </div>
                      <div className="linkTextLeftbar">
                        <a href="#">Sapien id suscipit magna sed felis</a>
                      </div>
                      <div className="linkTextLeftbar">
                        <a href="#">Aptent taciti sociosqu ad litora</a>
                      </div>
                    </div>
                    <a href="#" id="cardButton" class="btn btn-dark">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RightSidebar;
