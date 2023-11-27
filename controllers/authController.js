const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../config/db");
const secretKey = "secretkey";

const loginUser = async (req, res) => {
  const { uname, password } = req.body;
  // console.log("this is req body", req.body);
  // Fetch user from the database
  const fetchQuery = "SELECT * FROM login_data WHERE uname=?";
  pool.execute(fetchQuery, [uname], async (err, result) => {
    if (err) {
      console.error("Error during login:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (result.length > 0) {
        const user = result[0];

        // Compare Hsashed Passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          // Generate JWT Token
          const token = jwt.sign({ uname: user.uname }, secretKey, {
            expiresIn: "900s",
          });
          res.json({ token });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  });
};

const registerUser = async (req, res) => {
  const { uname, password } = req.body;
  // console.log(req.body);

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into the database
  const query = "insert into login_data(uname,password) values(?,?)";
  pool.execute(query, [uname, hashedPassword], (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(201).json({ message: "User registered successfully" });
    }
  });
};

const protectedRoute = (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
};

module.exports = { loginUser, registerUser, protectedRoute };
