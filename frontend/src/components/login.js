import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Axios from "axios";
// import { useHistory } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Login() {
    //   let navigate = useNavigate();
    // const History = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // function handleSubmit(event) {
    //     // var axios = require('axios');
    //     // axios.defaults.withCredentials = true;
    //     var data = JSON.stringify({
    //         email: email,
    //         password: password,
    //     });

    //     var config = {
    //         method: "post",
    //         url: "http://localhost:3001/login",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         data: data,
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             if (response.data.token) {
    //                 console.log(response)
    //                 // window.location.replace("http://localhost:3000/dashboard");
    //             } else {
                    
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             window.alert("wrong credentials");
    //         });
    // }
    Axios.defaults.withCredentials = true;
    function handleSubmit(event) {
        // document.write(email)
        // document.write(password)
        Axios.post("https://ecommerce-auth-app.herokuapp.com/login",{email:email,password:password}).then(function (response) {
                        console.log(JSON.stringify(response.data));
                        if (response.data.token) {
                            // console.log(response)
                            window.location.replace("http://localhost:3000/dashboard");
                        } else {
                            
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        window.alert("wrong credentials");
                    });
    }
    return (
        <div>
            <section
                class="h-100 gradient-form"
                style={{ backgroundColor: "#eee" }}
            >
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
                                                    We are The Lotus Team
                                                </h4>
                                            </div>

                                            <form onSubmit={(e) =>
                                                                handleSubmit(e)
                                                            }>
                                                <p>
                                                    Please login to your account
                                                </p>

                                                <div class="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form2Example11"
                                                        class="form-control"
                                                        // placeholder="Phone number or email address"
                                                        placeholder="Username"
                                                        onInput={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {/* <label class="form-label" for="form2Example11">
                            Username
                          </label> */}
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form2Example22"
                                                        class="form-control"
                                                        placeholder="Password"
                                                        onInput={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {/* <label class="form-label" for="form2Example22">
                            Password
                          </label> */}
                                                </div>

                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    {/* <Link to={`/dashboard/${email}`}> */}
                                                    {/* <Link to={`/dashboard`}> */}
                                                    <Link>
                                                        <button
                                                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="button"
                                                            onClick={(e) =>
                                                                handleSubmit(e)
                                                            }
                                                        >
                                                            Log in
                                                        </button>
                                                    </Link>
                                                    <br />
                                                    <a
                                                        class="text-muted"
                                                        href="#!"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>

                                                <div class="d-flex align-items-center justify-content-center pb-4">
                                                    <p class="mb-0 me-2">
                                                        Don't have an account?
                                                    </p>
                                                    <Link to="/signup">
                                                        <button
                                                            type="button"
                                                            class="btn btn-outline-danger"
                                                        >
                                                            Create new
                                                        </button>
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 class="mb-4">
                                                We are more than just a company
                                            </h4>
                                            <p class="small mb-0">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat.
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

// function LoginForm() {
//   return <div>Login Form comes here</div>;
// }
