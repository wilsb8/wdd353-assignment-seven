const express = require("express");
const router = express.Router();
const postLogin = require('../../db/db');

router.get("/", () => {
  res.status(200).json({
    message: "Server is up.",
    method: req.method,
  });
});

router.post("/registration", (req, res) => {
  postLogin(req).then(result => {
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