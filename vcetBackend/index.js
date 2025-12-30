const express = require("express");
const mdb = require("mongoose");
const Signup = require("./models/signupSchema");
const app = express();
app.use(express.json());
mdb
  .connect("mongodb://localhost:27017/vcetDB")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsuccessful", err);
  });
app.get("/", (req, res) => {
  res.send("Welcome VCET to Backend Server");
});
app.get("/json", (req, res) => {
  res.json({ Message: "VCET College", Cluster: "Computing" });
});
app.get("/static", (req, res) => {
  res.sendFile(
    "/Users/prasanthksp/Documents/RAMPeX-Parent-Folder/Trainings/VCET/vcetBackend/index.html"
  );
});
app.post("/signup", (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  console.log(username, email, password);
  const newUser = new Signup({
    username: username,
    email: email,
    password: password,
  });
  newUser.save();
  res.json({ message: "Signup Successful", isSignup: true });
});

app.post("/login", async(req, res) => {
  const { email, password } = req.body;
  const existingUser = await Signup.findOne({ email: email });
  if (existingUser) {
    if(existingUser.password === password)
    {
        res.json({"message":"Login Successful","isLogin":true})
    } else {
        res.json({"message":"Invalid Password","isLogin":false})
    }
  } else {
    res.json({"message":"User not found","isLogin":false})
  }
});

app.listen(3001, () => {
  console.log("Backend Server Started Successfully");
});
