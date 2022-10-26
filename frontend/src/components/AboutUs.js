import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <div className="navbar-brand">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{ maxHeight: "50px" }}
              alt="logo"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link to="/dashboard/ " style={{ textDecoration: "None" }}>
                  <a className="nav-link h5" aria-current="page" href="#!">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link h5 active" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/ " style={{ textDecoration: "None" }}>
                  <a className="nav-link h5" href="#!">
                    Shop
                  </a>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <!-- Header--> */}
      <div className="gradient-custom-2 py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">About The Lotus Team</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Keeping it simple
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
