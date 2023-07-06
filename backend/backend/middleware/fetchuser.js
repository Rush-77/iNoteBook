const jwt = require("jsonwebtoken");

const JWT_SECRET = "Mars@2023"; // secret kry to generate jwt token

//middleware function
const fetchuser = (req, res, next) => {
  try {
    //get the user from jwt token
    const token = req.header('auth-token');
    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied - unauthorized token." });
    }
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
        res.status(401).json({ error: "Access denied - unauthorized token." });
  }
};

module.exports = fetchuser;
