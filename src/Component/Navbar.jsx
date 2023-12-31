import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Headers } from "react-bootstrap";
import "../App.css";
import Dropdown from "react-bootstrap/Dropdown";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";

function Navbar() {
  const [buttonClass, setButtonClass] = useState(0); // Initialize with the default active button
  const [activeButton, setActiveButton] = useState(0); // Initialize with the default active button

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  function menuclick() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div style={{ paddingBottom: "40px" }}>
      <h1 style={{ padding: "40px 40px 10px 40px" }} id="header">
        Dopetrope
      </h1>
      <div id="mySidenav" class="sidenav" style={{ zIndex: "2" }}>
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link to="/" onClick={() => closeNav()}>
          Home
        </Link>
        <ul class="first-nav">
          <li class="cryptocurrency">
            <a href="#" style={{paddingLeft:"0px"}}>dropdown</a>
            <ul>
              <li>
                <a href="#" style={{paddingLeft:"0px"}}>Another action</a>
              </li>
              <li>
                <a href="#" style={{paddingLeft:"0px"}}>Submenu item</a>
              </li>
              <li>
                <a href="#" style={{paddingLeft:"0px"}}>Submenu item 2</a>
                
              </li>
              <li>
                <a href="#" style={{paddingLeft:"0px"}}>Submenu item 3</a>
                <ul>
                  <li>
                <a href="#" style={{paddingLeft:"0px"}}>Multi level 1</a>
                  </li>
                  <li>
                <a href="#" style={{paddingLeft:"0px"}}>Multi level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" style={{paddingLeft:"0px"}}>Submenu item 4</a>
              </li>
            </ul>
          </li>
        </ul>

        <Link to="/LeftSidebar" onClick={() => closeNav()}>
          Left SideBar
        </Link>
        <Link to="/RightSideBar" onClick={() => closeNav()}>
          Right SideBar
        </Link>
        <Link to="/NoSidebar" onClick={() => closeNav()}>
          No SideBar
        </Link>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light m-2 navbarLine">
        <button
          class="navbar-toggler"
          id="sideIcon"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={menuclick}
          style={{
            position: "fixed",
            zIndex: "1",
            backgroundColor: "#969696BF",
            top: "45px",
            left: "20px",
          }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav" id="myDIV">
            <Link
              className={`buton ${
                activeButton === 1 ? "active" : ""
              } nav-link navHover`}
              to="/"
              onClick={() => handleClick(1)}
            >
              Home
            </Link>
            <a className="" style={{ textDecoration: "none" }}>
              <MDBNavbar
                class="nav-item nav-link navHover"
                expand="lg"
                light
                bgColor="light"
              >
                <MDBContainer fluid>
                  <MDBNavbarNav>
                    <MDBNavbarItem>
                      <MDBDropdown>
                        <MDBDropdownToggle tag="a" className="nav-link pt-0">
                          Dropdown
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          <MDBDropdownItem>
                            <MDBDropdownLink href="#">Action</MDBDropdownLink>
                          </MDBDropdownItem>
                          <MDBDropdownItem>
                            <MDBDropdownLink href="#">
                              Another action
                            </MDBDropdownLink>
                          </MDBDropdownItem>
                          <MDBDropdownItem>
                            <MDBDropdownLink href="#">
                              Submenu &raquo;
                            </MDBDropdownLink>
                            <ul className="dropdown-menu dropdown-submenu">
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">
                                  Submenu item 1
                                </MDBDropdownLink>
                              </MDBDropdownItem>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">
                                  Submenu item 2
                                </MDBDropdownLink>
                              </MDBDropdownItem>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">
                                  Submenu item 3 &raquo;
                                </MDBDropdownLink>
                                <ul className="dropdown-menu dropdown-submenu">
                                  <MDBDropdownItem>
                                    <MDBDropdownLink href="#">
                                      Multi level 1
                                    </MDBDropdownLink>
                                  </MDBDropdownItem>
                                  <MDBDropdownItem>
                                    <MDBDropdownLink href="#">
                                      Multi level 2
                                    </MDBDropdownLink>
                                  </MDBDropdownItem>
                                </ul>
                              </MDBDropdownItem>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">
                                  Submenu item 4
                                </MDBDropdownLink>
                              </MDBDropdownItem>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">
                                  Submenu item 5
                                </MDBDropdownLink>
                              </MDBDropdownItem>
                            </ul>
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavbarItem>
                  </MDBNavbarNav>
                </MDBContainer>
              </MDBNavbar>
            </a>
            <Link
              className={`buton ${
                activeButton === 2 ? "active" : ""
              } nav-link navHover`}
              to="/LeftSidebar"
              onClick={() => handleClick(2)}
            >
              Left SideBar
            </Link>
            <Link
              className={`buton ${
                activeButton === 3 ? "active" : ""
              } nav-link navHover`}
              to="/RightSideBar"
              onClick={() => handleClick(3)}
            >
              Right SideBar
            </Link>
            <Link
              className={`buton ${
                activeButton === 4 ? "active" : ""
              } nav-link navHover`}
              to="/NoSidebar"
              onClick={() => handleClick(4)}
            >
              No SideBar
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
