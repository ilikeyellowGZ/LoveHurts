const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
console.log(process.env.TEST_VARIABLE)
console.log(process.env.MONGODB_URI)
console.log(process.env.PORT)

app.use(bodyParser.urlencoded({ extended: true }));

// Use the MongoDB connection string from the environment variables
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
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

// Use the port from the environment variables or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Site running on port ${PORT}`);
});
