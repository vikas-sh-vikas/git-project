import React from "react";
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
  // <script>
// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
// </script>
  return (
    <div style={{paddingBottom:"40px"}}>
      <h1 style={{padding:"40px 40px 10px 40px"}} id="header">
        Dopetrope
      </h1>

      <nav class="navbar navbar-expand-lg navbar-light m-2">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav" id="myDIV">

            <a className="nav-link navHover" href="/">
              Home  
            </a>
            <a className="" style={{textDecoration:"none"}}>
              <MDBNavbar class="nav-item nav-link navHover" expand="lg" light bgColor="light" >
                <MDBContainer fluid>
                  <MDBNavbarNav>
                    <MDBNavbarItem>
                      <MDBDropdown>
                        <MDBDropdownToggle tag="a" className="nav-link pt-0">
                          Dropdown Link
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
            <a className="nav-item nav-link navHover" href="/LeftSidebar">
              Left SideBar
            </a>
            <a className="nav-item nav-link navHover" href="/RightSideBar">
              Right SideBar
            </a>
            <a className="nav-item nav-link navHover" href="/NoSidebar">
              No SideBar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
