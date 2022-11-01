const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// require database connection
const dbConnect = require("./db/dbConnect");
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./db/userModel");
const e = require("express");
const auth=require("./auth")

// execute database connection
dbConnect();
// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" });
    next();
});
app.post("/register", (request, response) => {
    bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
            // console.log(request.body)
            // console.log(hashedPassword)
            const user = new User({
                email: request.body.email,
                password: hashedPassword,
            });
            user.save()
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Succsefully",
                        result,
                    });
                })
                .catch((error) => {
                    response.status(500).send({
                        message: "error creating user",
                        error,
                    });
                });
        })
        .catch((error) => {
            response.status(500).send({
                message: "Error creating user",
                error,
            });
        });
});
app.post("/login", (request, response) => {
    console.log(request.body.email);
    User.findOne({ email: request.body.email })
        .then((user) => {
            bcrypt
                .compare(request.body.password, user.password)
                .then((passwordCheck) => {
                    if (!passwordCheck) {
                        return response.status(404).send({
                            message: "Password Does not Match",
                            error,
                        });
                    }
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );
                    response.status(200).send({
                        message: "login-successfull",
                        email: user.email,
                        token,
                    });
                })
                .catch((e) => {
                    response.status(404).send({
                        message: "password Does not Match",
                        e,
                    });
                });
        })
        .catch((e) => {
            response.status(404).send({
                message: "Email Not Found",
                e,
            });
        });
});
// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint",auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});
module.exports = app;
