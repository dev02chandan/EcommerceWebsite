import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  // Axios.defaults.withCredentials = true;
  function handleSubmit(event) {
    // document.write(email)
    // document.write(password)
    if (confirm_password === password) {
      console.log("this works");
      Axios.post("https://ecommerce-auth-app.herokuapp.com/register", {
        email: email,
        password: password,
        number: number,
        name: name,
      })
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          window.location.replace("http://localhost:3000/");
        })
        .catch(function (error) {
          console.log(error);
          window.alert("making new user failed");
        });
    } else {
      window.alert("password and cocnfirm password do not match");
    }
  }
  return (
    <div>
      <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">
                          Welcome to The Lotus Team
                        </h4>
                      </div>

                      <form
                        onSubmit={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        <p>Please fill the following details:</p>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            // placeholder="Phone number or email address"
                            placeholder="Full Name"
                            onInput={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            inputMode="numeric"
                            id="form2Example11"
                            class="form-control"
                            // placeholder="Phone number or email address"
                            placeholder="Mobile Number"
                            onInput={(e) => setNumber(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            // placeholder="Phone number or email address"
                            placeholder="Email ID"
                            onInput={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            placeholder="Password"
                            onInput={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            placeholder="Confirm Password"
                            onInput={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>

                        <Link>
                          <div class="text-center pt-1 mb-5 pb-1">
                            <button
                              class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="button"
                              onClick={(e) => {
                                handleSubmit(e);
                              }}
                            >
                              Create Your Account
                            </button>
                          </div>
                        </Link>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                        Here we sell the best prices for all the appliances in
                        the market. Keeping the Customer first we strive to
                        render service to the best of our capiblity for Customer
                        Satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
