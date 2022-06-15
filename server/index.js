const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/auth.js");

require("dotenv").config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});