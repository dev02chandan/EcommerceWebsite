import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect } from "react";
import { useRef } from "react";
import Axios from "axios";
import pic1 from "../images/Picture1.png";
import pic2 from "../images/Picture2.png";
import pic3 from "../images/Picture3.png";
import pic4 from "../images/Picture4.png";
import pic5 from "../images/Picture5.png";
import pic6 from "../images/Picture6.png";
import pic7 from "../images/Picture7.png";
import pic8 from "../images/Picture8.png";
// var axios = require('axios');

export default function Dashboard() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("https://ecommerce-auth-app.herokuapp.com/auth-endpoint").then(
      (response) => {
        console.log(response.data);
        if (response.data.loggedIn === true) {
          console.log("some");
        }
        // else
        // {
        //   window.location.replace("http://localhost:2000");
        // }
      }
    );
  }, []);
  // let params = useParams();
  return (
    <div>
      {/* <h1>My Dashboard</h1>
      <h1>User Details: {params.user}</h1>
      <nav>
        <Link to="orders">My Orders</Link>
        <Link to="details">My Details</Link>
        <Link to="settings">Settings</Link>
      </nav> */}

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
                <div className="nav-link active h5" aria-current="page">
                  Home
                </div>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" style={{ textDecoration: "None" }}>
                  <div className="nav-link h5">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link h5" onClick={handleClick}>
                  Shop
                </div>
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
            <h1 className="display-4 fw-bolder">
              Shop in style
              {/* {params.user === " "
                ? ""
                : `, ${capitalizeFirstLetter(params.user)}`} */}
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Section--> */}
      <section className="py-5" ref={ref}>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic1}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Hair Dryer-Philips</h5>
                    {/* <!-- Product price--> */}
                    Rs. 2000
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn btn-outline-dark mt-auto">
                      View details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style={{ top: 0.5 + "rem", right: 0.5 + "rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic2}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Mobile: OnePlus Nord CE 2 5G</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill">
                        Lasted 2 years and counting without problems
                      </div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      Rs.33000
                    </span>
                    <br />
                    Rs.28000
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn btn-outline-dark mt-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic3}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Lenovo ThinkPad</h5>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      Rs. 30000
                    </span>
                    <br />
                    Rs. 24000
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div
                      className="btn btn-outline-dark mt-auto"
                      // style={{ top: 0.5 + "rem", right: 0.5 + "rem" }}
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic4}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Nike Sport Shoes</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill">
                        Durable shoes for running
                      </div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    Rs. 1500
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div
                      className="btn btn-outline-dark mt-auto"
                      // style={{ top: 0.5+"rem", right: 0.5+"rem" }}
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style={{ top: 0.5 + "rem", right: 0.5 + "rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic5}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Lavie Purse</h5>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      Rs.20000
                    </span>
                    <br />
                    Rs.10000
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn btn-outline-dark mt-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic6}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">
                      boAt Xtend Smartwatch with Alexa Built-in
                    </h5>
                    {/* <!-- Product price--> */}
                    Rs.3000
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn btn-outline-dark mt-auto">
                      View details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style={{ top: 0.5 + "rem", right: 0.5 + "rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic7}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">
                      Haus & Kinder Floral Grace Bedsheet
                    </h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill">Amazing Comfort</div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      Rs. 2000
                    </span>
                    <br />
                    Rs. 1300
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn btn-outline-dark mt-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 shadow">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src={pic8}
                  alt="..."
                  style={{ maxHeight: 200 }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">boAt BassHeads 225</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill">Superb Sound Quality</div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    Rs. 799
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn btn-outline-dark mt-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 gradient-custom-2">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
      {/* <!-- Bootstrap core JS--> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
      {/* <!-- Core theme JS--> */}
      {/* <script src="js/scripts.js"></script>/ */}
    </div>
  );
}
