import jwt from "jsonwebtoken";

export function generateAccessToken(userEmailObj) {
  return jwt.sign(userEmailObj, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (!token && req?.cookies?.auth) {
    token = req.cookies.auth;
  }

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err, user);

    if (err) return res.sendStatus(403);

    req.userEmail = user.email;

    next();
  });
}
