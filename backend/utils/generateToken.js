import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true, // prevents xss attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request  forgery attacks
    maxAge: 15 * 24 * 60 * 60 * 1000,
  });
  return token;
};

export default generateToken;
