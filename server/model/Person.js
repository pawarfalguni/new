let mongoose = require("mongoose");
let studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  salary: String,
  address: String,
  experience: String,
  designation: String,
  leaves: String,
  gender: String,
  education: String,
  joining_date: String,
  birth: String,
});
module.exports = mongoose.model("users", studentSchema);
