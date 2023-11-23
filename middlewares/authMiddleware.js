const jwt = require("jsonwebtoken");
const secretKey = "secretkey";

const verifyToken = (req, res, next) => {
  // Extract the token from the "Authorization" header
  const token = req.header("authorization");
  console.log("Token:", token);

  // Check if the token is missing
  if (!token) {
    // Respond with a 403 Forbidden status if the token is missing
    return res.status(403).json({ error: "Access denied" });
  }

  // Verify the JWT token using the provided secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "Invalid token" });
    }
    console.log("Decoded Token:", decoded);
    // Attach the decoded user information to the request object for use in subsequent middleware or route handlers
    req.user = decoded;

    // Call the next middleware or route handler
    next();
  });
};

module.exports = { verifyToken };
