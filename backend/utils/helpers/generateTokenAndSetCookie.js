import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  console.log("Before jwt");
  console.log("jwt secret --- > ", process.env.JWT_SECRET);
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  console.log("After jwt");
  res.cookie("jwt", token, {
    httpOnly: true, // more secure
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    sameSite: "strict", // CSRF
  });

  return token;
};

export default generateTokenAndSetCookie;
