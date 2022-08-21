const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  try {
    const token = req.header("x-auth-token");
    //check for token
    if (!token) return res.status(401).json({ msg: "User Unauthorised" });

    //verify the token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    //Add user from payload
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Invalid Authrization" });
  }
}

module.exports = auth;
