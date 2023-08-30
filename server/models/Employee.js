const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
});

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;
