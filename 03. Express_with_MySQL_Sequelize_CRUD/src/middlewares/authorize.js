import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(403).json({ error: "Access denied. Token missing." });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(403).json({ error: "Access denied. Token missing." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ error: "Token has expired. Please login again." });
    } else if (err.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ error: "Token is invalid. Access denied." });
    } else {
      return res.status(500).json({ error: "Server error in authentication." });
    }
  }
};
