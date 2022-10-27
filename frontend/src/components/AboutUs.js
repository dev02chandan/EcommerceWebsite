import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

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
                  <div className="nav-link h5" aria-current="page">
                    Home
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link h5 active">About</div>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/ " style={{ textDecoration: "None" }}>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          nemo, in sapiente, soluta accusantium aliquam repellendus quod ipsum
          maiores atque necessitatibus omnis perferendis eius labore magnam unde
          porro, quibusdam neque velit vitae iusto doloribus nihil. Veritatis
          expedita, laborum corporis commodi eaque porro enim minus voluptates
          possimus voluptatibus sapiente in accusamus provident, vero doloribus.
          Quos!.
        </p>
        <h1 className="display-5 fw-bolder new" style={{ marginTop: 70 }}>
          Our Vision
        </h1>
        <p className="lead fw-normal mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          obcaecati deserunt sint nulla possimus sit mollitia cumque omnis eaque
          eveniet earum animi nihil ipsum illum veritatis esse, quas qui,
          delectus, voluptatibus officiis enim magnam laborum dolorem. Quasi
          amet ab autem porro ipsum eius facilis, iusto, ad voluptas sunt id
          eligendi quas vitae voluptate quod est sint cum! Magnam nisi, vero
          repellat mollitia odio eos molestias explicabo in vitae, deleniti
          numquam!
        </p>
      </div>

      {/* <!-- Footer--> */}
      <footer className="py-5 gradient-custom-2" style={{ marginTop: "100px" }}>
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
