import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { FaBolt, FaCog, FaStar, FaFile, FaComment } from "react-icons/fa";
import Footer from "./Footer";

function Home() {

  return (
    <div>
      {/* <Navbar /> */}
      <div
        class="p-5 d-flex justify-content-center align-items-center text-center bg-image rounded-3"
        style={{
          backgroundImage: "url(../Untitled.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="bg-dark mainContent" id="infoImage">
              <h2 class="mb-3 text-white" id="infoHeader">
                Howdy. This is Dopetrope.
              </h2>
              <p class="mb-3 maskPara text-danger" id="infoPara">
                A responsive template by HTML5 UP
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container1" style={{ padding: "0px 0px 64px 0px" }}>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-m-12 pb-4">
              <div class="card text-center border-0 iconCard">
                <div class="card-body">
                  <div class="d-flex justify-content-center align-items-end bg-danger pentagon">
                    <div className="">
                      <FaCog
                        className="icon"
                        style={{
                          color: "white",
                          width: "60px",
                          height: "60px",
                        }}
                      ></FaCog>
                    </div>
                  </div>
                  <h5 class="cardHeader">lorem ipsum</h5>
                  <p class="card-text" id="para">
                    Nisl amet dolor sit ipsum veroeros sed blandit consequat
                    veroeros et magna tempus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-m-12 pb-4">
              <div class="card text-center border-0 iconCard">
                <div class="card-body">
                  <div class="d-flex justify-content-center align-items-end bg-dark pentagon">
                    <div className="icon">
                      <FaBolt
                        style={{
                          color: "white",
                          width: "60px",
                          height: "60px",
                        }}
                      ></FaBolt>
                    </div>
                  </div>
                  <h5 class="cardHeader">Magna etiam dolor</h5>
                  <p class="card-text" id="para">
                    Nisl amet dolor sit ipsum veroeros sed blandit consequat
                    veroeros et magna tempus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-m-12 pb-4">
              <div class="card text-center border-0 iconCard">
                <div class="card-body">
                  <div class="d-flex justify-content-center align-items-end bg-secondary pentagon">
                    <div className="icon">
                      <FaStar
                        style={{
                          color: "white",
                          width: "60px",
                          height: "60px",
                        }}
                      ></FaStar>
                    </div>
                  </div>
                  <h5 class="cardHeader">Tempus adipiscing</h5>
                  <p class="card-text" id="para">
                    Nisl amet dolor sit ipsum veroeros sed blandit consequat
                    veroeros et magna tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 buttonStyleGetstarted">
              <Button
                className=""
                variant="danger"
                size="lg"
                style={{ padding: "10px 60px" }}
              >
                <strong>Get Started</strong>
              </Button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 buttonStyleLearMore">
              <Button
                className=""
                variant="dark"
                size="lg"
                style={{ padding: "10px 60px" }}
              >
                <strong>Learn More</strong>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="divBack d-flex justify-content-center align-items-center">
        <div className="container1" style={{ padding: "50px 0px" }}>
          <div className="major">
            <h2
              className="portfolio"
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              My Portfolio
            </h2>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 pb-4">
              <div class="card padding-0 h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../1.jpg)",
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
            <div class="col-lg-4 col-md-6 col-sm-12 pb-4">
              <div class="card padding-0 h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../2.jpg)",
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
            <div class="col-lg-4 col-md-6 col-sm-12 pb-4">
              <div class="card padding-0 h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../3.jpg)",
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
            <div class="col-lg-4 col-md-6 col-sm-12 pb-4">
              <div class="card padding-0 h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../4.jpg)",
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
            <div class="col-lg-4 col-md-6 col-sm-12 pb-4">
              <div class="card padding-0 h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../5.jpg)",
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
            <div class="col-lg-4 col-md-6 col-sm-12 pb-4">
              <div class="card padding-0 h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5 d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../6.jpg)",
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

          </div>
          <div className="major">
            <h2
              className="portfolio"
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              The Blog
            </h2>
          </div>

          <div class="row" style={{ paddingBottom: "24px" }}>
            <div class="col-lg-6 col-md-6 col-sm-12 pb-4">
              <div class="card text-center h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5  d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../7.jpg)",
                      backgroundSize: "cover",
                      height: "260px",
                    }}
                  ></div>
                  <div style={{ padding: "44px 28px", textAlign: "left" }}>
                    <h5 class="portfolioHeader">Magna tempus consequat</h5>
                    <p class="card-text" id="paraHeaderMain">
                      Posted 45 minutes ago{" "}
                    </p>

                    <p class="card-text" id="portPara">
                      Lorem ipsum dolor sit amet sit veroeros sed et blandit
                      consequat sed veroeros lorem et blandit adipiscing feugiat
                      phasellus tempus hendrerit, tortor vitae mattis tempor,
                      sapien sem feugiat sapien, id suscipit magna felis nec
                      elit. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos lorem ipsum dolor sit amet.
                    </p>
                    <div className="buttonFlex">
                      <Button
                      className="cardButton"
                        variant="danger"
       
                        style={{ marginRight: "1.5rem" }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <FaFile style={{ marginRight: "5px", opacity: ".5"}}></FaFile>
                          <strong>
                            Continue Reading
                            </strong>
                        </div>
                      </Button>
                      <Button 
                      className="cardButton"
                      variant="dark" 
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <FaComment style={{ marginRight: "5px",opacity: ".5" }}></FaComment>
                          <strong>
                          33 Comments
                          </strong>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 pb-4">
              <div class="card text-center h-100">
                <div class="card-body p-0">
                  <div
                    class="p-5  d-flex justify-content-center align-items-center text-center bg-image"
                    style={{
                      backgroundImage: "url(../8.jpg)",
                      backgroundSize: "cover",
                      height: "260px",
                    }}
                  ></div>
                  <div style={{ padding: "44px 28px", textAlign: "left" }}>
                    <h5 class="portfolioHeader">Magna tempus consequat</h5>
                    <p class="card-text" id="paraHeaderMain">
                      Posted 45 minutes ago{" "}
                    </p>
                    <p class="card-text" id="portPara">
                      Lorem ipsum dolor sit amet sit veroeros sed et blandit
                      consequat sed veroeros lorem et blandit adipiscing feugiat
                      phasellus tempus hendrerit, tortor vitae mattis tempor,
                      sapien sem feugiat sapien, id suscipit magna felis nec
                      elit. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos lorem ipsum dolor sit amet.
                    </p>
                    <div className="buttonFlex">
                      <Button
                      className="cardButton"
                        variant="danger"
                        style={{ marginRight: "1.5rem" }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <FaFile style={{ marginRight: "5px", opacity: ".5"}}></FaFile>
                          <strong>
                            Continue Reading
                            </strong>
                        </div>
                      </Button>
                      <Button 
                      className="cardButton"
                      variant="dark" 

                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <FaComment style={{ marginRight: "5px",opacity: ".5" }}></FaComment>
                          <strong>
                          33 Comments
                          </strong>
                        </div>
                      </Button>
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

export default Home;
