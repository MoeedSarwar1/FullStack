// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

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
