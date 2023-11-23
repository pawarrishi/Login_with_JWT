const express = require("express");
const bodyParser = require("body-parser");
const dataRoutes = require("./routes/dataRoutes");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", dataRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error is", err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
