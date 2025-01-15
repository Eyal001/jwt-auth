const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.cookies["token"]; //
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) {
      return res.status(403).json({ message: "forbidden", error: err.message });
    }

    /** layer - check token in db / user */
    console.log(decode);

    /** global type of request */
    req.user = decode;

    // console.log(req);

    next();
  });
};

module.exports = {
  verifyToken,
};
