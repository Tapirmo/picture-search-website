import { Outlet} from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import nav1 from "../img/nav1.svg";

const Layout = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img
            src={nav1}
            alt="good"
            style={{ height: "5%", width: "5%" }}
          ></img>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about">
                  About website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
