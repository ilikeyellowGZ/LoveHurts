const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://GamerGoon:Ecq9M3lurLWX3GIW@lovehurts.hht8zz3.mongodb.net/?retryWrites=true&w=majority&appName=firstTimeUse"
);

// Serve static files from the "public" directory
app.use(express.static("public"));

// Creating schema
const userInforSchema = {
  email: String,
  title: String,
};
const userInfo = mongoose.model("userInfo", userInforSchema);

// Serve index.html for the root URL ("/")
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function (req, res) {
  let newUser = new userInfo({
    title: req.body.title,
    email: req.body.email,
  });
  newUser.save();
  res.redirect("/public/index.html");
});

app.listen(5000, function () {
  console.log("Site running on 3000");
});
