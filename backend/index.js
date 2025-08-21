// index.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cors = require("cors");
const User = require("./models/userSchema");
const signup = require("./controllers/signup");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable parsing JSON request bodies

//register
app.post("/api/register", signup);

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello From The Server Side Jaanu" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
