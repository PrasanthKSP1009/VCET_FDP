const mdb = require("mongoose");

const signupSchema = mdb.Schema({
  username: String,
  email: String,
  password: String,
});
const signup_schema = mdb.model("signup", signupSchema);
module.exports = signup_schema;
