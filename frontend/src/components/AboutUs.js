import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

function AboutUs() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <div className="navbar-brand rotate">
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
                <Link to="/dashboard" style={{ textDecoration: "None" }}>
                  <div className="nav-link h5" aria-current="page">
                    Home
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link h5 active">About</div>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" style={{ textDecoration: "None" }}>
                  <div className="nav-link h5">Shop</div>
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
            <h1 className="display-4 fw-bolder">About Us</h1>
            <p className="lead fw-normal text-white-50 mb-0">The Lotus Team</p>
          </div>
        </div>
      </div>

      {/* Mission and vision */}
      <div
        style={{
          padding: 30,
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 60,
        }}
      >
        <h1 className="display-5 fw-bolder new">Our Mission</h1>
        <p className="lead fw-normal mb-0">
          The Lotus Shop is a one stop shop for all your fashion and lifestyle
          needs. Being India's largest e-commerce store for fashion and
          lifestyle products, The Lotus Shop aims at providing a hassle free and
          enjoyable shopping experience to shoppers across the country with the
          widest range of brands and products on its portal. The brand is making
          a conscious effort to bring the power of fashion to shoppers with an
          array of the latest and trendiest products available in the country.
          The Lotus Shop's value proposition revolves around giving consumers
          the power and ease of purchasing fashion and lifestyle products
          online. Offerings such as the largest in-season product catalogue,
          100% authentic products, cash on delivery and 30 day return policy
          make The Lotus Shop, the preferred shopping destination in the
          country. To make online shopping easier for you, a dedicated customer
          connect team is on standby to answer your queries 24x7.
        </p>
        <h1 className="display-5 fw-bolder new" style={{ marginTop: 70 }}>
          Our Vision
        </h1>
        <p className="lead fw-normal mb-0">
          The Lotus Shop understands its shoppers' needs and caters to them with
          choice of apparel, accessories, cosmetics and footwear from over 500
          leading Indian and international brands. Prominent brands include
          Adidas, Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK,
          Timberland, Avirate, FabIndia and Biba to name a few. You can also
          shop from some recently introduced labels such as - Roadster, Sher
          Singh, Dressberry, Kook N Keech and ETC. Recognitions Awarded 'Fashion
          eRetailer of the Year 2013' by Franchise India – Indian eRetail Awards
          Awarded 'Best E-commerce Website for 2012' by IAMAI – India Digital
          Awards Awarded 'Images Most Admired Retailer of the Year: Non–Store
          Retail' for 2012 by Images Group Awarded 'Best E-commerce Partner of
          the year 2011-12' by Puma India
        </p>
      </div>

      {/* <!-- Footer--> */}
      <footer className="py-5 gradient-custom-2" style={{ marginTop: "100px" }}>
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; The Lotus Shop 2022
          </p>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
