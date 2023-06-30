import jwt from "jsonwebtoken";

//--------------GENERATE-ACCESS-TOKEN--------------\\
export function generateAccessToken(userEmailObj) {
  return jwt.sign(userEmailObj, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
};
