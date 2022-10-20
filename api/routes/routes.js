const express = require("express");
const router = express.Router();
const postLogin = require('../../db/db');
const postRegistration = require('../../db/db')

router.get("/", (req, res) => {
  res.render("home", {
    pagename: "Home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    pagename: "About",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    pagename: "Contact",
  });
});

router.get("/services", (req, res) => {
  res.render("services", {
    pagename: "Services",
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    pagename: "Login",
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    pagename: "Registration",
  });
});

router.post("/register", (req, res) => {
  postRegistration(req).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Registration saved.",
      status:200,
      login: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        email: req.body.email,
        password: req.body.password,
        metadata: {
          hostname: req.hostname,
          method: req.method,
        },
      },
    });
  })
  .catch(err => {
    res.status(500).json({
      message: "Registration failed.",
      status: 500,
      error: {
        message: err.message,
        metadata: {
          hostname: req.hostname,
          method: req.method,
        },
      },
    });
  })
});

module.exports = router;