// index.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cors = require("cors");
const User = require("./models/userSchema");
const signup = require("./controllers/signup");
const login = require("./controllers/login");
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

//login
app.post("/api/login", login);

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
