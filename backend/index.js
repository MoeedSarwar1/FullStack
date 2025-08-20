// index.js
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
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

// Define your API routes
app.get("/", (req, res) => {
  res.send("Hello from the Express server!");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello From The Server Side Jaanu" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
