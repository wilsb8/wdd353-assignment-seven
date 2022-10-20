const mongoose = require("mongoose");
const Registration = require("../api/models/registration");

const postRegistration = async (req) => {
  const registration = new Registration({
    _id: mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    email: req.body.email,
    password: req.body.password,
    });
  return await registration.save();
};

module.exports = postRegistration;