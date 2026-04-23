const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API running...");
});

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("DB Connected");

  // Start server ONLY after DB connects
  app.listen(4000, () => {
  console.log("Server running on port 4000");
});
})
.catch(err => console.log(err));

// API Routes
app.use("/api/auth", require("./routes/auth"));

app.use("/api/bills", require("./routes/bill"));