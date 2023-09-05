import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import {
  FaBolt,
  FaCog,
  FaStar,
  FaFile,
  FaComment
} from "react-icons/fa";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        class="p-5 d-flex justify-content-center align-items-center text-center bg-image rounded-3"
        style={{
          backgroundImage: "url(../Untitled.jpg)",
          // background: #CCE8F4 url(../../images/pic01.jpg);
          backgroundPosition: "center center",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
        }}
      >
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="bg-dark mainContent" id="infoImage">
              <h2 class="mb-3 text-white" id="infoHeader">Vikas. This is Dopetrope.</h2>
              <p class="mb-3 maskPara text-danger" id="infoPara">
                A responsive template by HTML5 UP
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: "0rem 14rem", padding: "0px 0px 64px 0px" }}>
        <Row>
          {/* <div className="d-flex" style={{ width: "100%" }}> */}
          <Col md={4} style={{ margin: "3rem 0rem", padding: "2rem 0rem" }}>
            {/* <div className="box1" style={{ width: "33.33%" }}> */}
            <div class="card text-center border-0 iconCard">
              <div class="card-body">
                <div class="d-flex justify-content-center align-items-end bg-danger pentagon">
                  <div className="">
                    <FaCog
                      className="icon"
                      style={{ color: "white", width: "60px", height: "60px" }}
                    ></FaCog>
                  </div>
                </div>
                <h5 class="cardHeader">lorem ipsum</h5>
                <p class="card-text" id="para">
                Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.
                </p>
              </div>
            </div>
            {/* </div> */}
          </Col>
          <Col md={4} style={{ margin: "3rem 0rem", padding: "2rem 0rem" }}>
            <div class="card text-center border-0 iconCard">
              <div class="card-body">
                <div class="d-flex justify-content-center align-items-end bg-dark pentagon">
                  <div className="icon">
                    <FaBolt
                      style={{ color: "white", width: "60px", height: "60px" }}
                    ></FaBolt>
                  </div>
                </div>
                <h5 class="cardHeader">Magna etiam dolor</h5>
                <p class="card-text" id="para">
                Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} style={{ margin: "3rem 0rem", padding: "2rem 0rem" }}>
            <div class="card text-center border-0">
              <div class="card-body">
                <div class="d-flex justify-content-center align-items-end bg-secondary pentagon">
                  <div className="icon">
                    <FaStar
                      style={{ color: "white", width: "60px", height: "60px" }}
                    ></FaStar>
                  </div>
                </div>
                <h5 class="cardHeader">Tempus adipiscing</h5>
                <p class="card-text" id="para">
                Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.
                </p>
              </div>
            </div>
          </Col>
          {/* </div> */}
        </Row>
        {/* <Row> */}
        <div className="mb-4">
          <Button
            variant="danger"
            size="lg"
            style={{ padding: "18px 75px", marginRight: "20px" }}
          >
           <strong>
            Get Started
            </strong>
          </Button>
          {"   "}
          <Button variant="dark" size="lg" style={{ padding: "18px 75px" }}>
            <strong>
            Learn More 
            </strong>

          </Button>
        </div>
      </div>

      {/* </Row> */}
      <div className="divBack">
        <div style={{ margin: "0rem 14rem", padding: "50px 0px" }}>
          <div className="major">
          <h2 className="portfolio" style={{ textAlign: "center", marginBottom: "40px" }}>
          My Portfolio
          </h2>
          </div>

          {/* <div className="d-flex" style={{ width: "100%" }}> */}
          <Row style={{paddingBottom:"24px"}}>
            {/* <div className="box1" style={{ width: "33.33%" }}> */}
            <Col md={4}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Ipsum feugiat et dolor</h5>
                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <a href="#" id="cardButton" class="btn btn-dark">
                    Find out more
                  </a>
                  </div>
                </div>
              </div>
            </Col>
            {/* </div> */}
            <Col md={4}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Ipsum feugiat et dolor</h5>
                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <a href="#" id="cardButton" class="btn btn-dark">
                    Find out more
                  </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Ipsum feugiat et dolor</h5>
                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <a href="#" id="cardButton" class="btn btn-dark">
                    Find out more
                  </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* </div> */}

          <Row style={{paddingBottom:"24px"}}>
          <Col md={4}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Ipsum feugiat et dolor</h5>
                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <a href="#" id="cardButton" class="btn btn-dark">
                    Find out more
                  </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Ipsum feugiat et dolor</h5>
                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <a href="#" id="cardButton" class="btn btn-dark">
                    Find out more
                  </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Ipsum feugiat et dolor</h5>
                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <a href="#" id="cardButton" class="btn btn-dark">
                    Find out more
                  </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="major">
          <h2 className="portfolio" style={{ textAlign: "center", marginBottom: "40px" }}>
          The Blog
          </h2>
          </div>
          <Row style={{paddingBottom:"24px"}}>
            <Col md={6}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Magna tempus consequat</h5>
                  <p class="card-text" id="paraHeaderMain">
                  Posted 45 minutes ago                  </p>

                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.
                  </p>
                  <a href="#" style={{marginRight:"1.5rem"}} id="cardButton" class="btn btn-danger" >
                    <div className="d-flex align-items-center">
                    <FaFile style={{marginRight:"5px"}}>
                    </FaFile>
                  Continue Reading
                    </div>
                  </a>
                  <a href="#" id="cardButton" class="btn btn-dark">
                  <div className="d-flex align-items-center">
                    <FaComment style={{marginRight:"5px"}}></FaComment>
                  33 Comments
                  </div>
                  </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
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
                  <div style={{padding:"44px 28px",textAlign:"left"}}>
                  <h5 class="portfolioHeader">Magna tempus consequat</h5>
                  <p class="card-text" id="paraHeaderMain">
                  Posted 45 minutes ago                  </p>
                  <p class="card-text" id="portPara">
                  Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.
                  </p>
                  <a href="#" style={{marginRight:"1.5rem"}} id="cardButton" class="btn btn-danger" >
                    <div className="d-flex align-items-center">
                    <FaFile style={{marginRight:"5px"}}>
                    </FaFile>
                  Continue Reading
                    </div>
                  </a>
                  <a href="#" id="cardButton" class="btn btn-dark">
                  <div className="d-flex align-items-center">
                    <FaComment style={{marginRight:"5px"}}></FaComment>
                  33 Comments
                  </div>
                  </a>
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

export default Home;
