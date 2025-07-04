import User from "../models/User.js";

export async function signup(req, res) {
  const { username, password, email } = req.body;
  try {
    if (!email || !password || !username) {
      return res.status(400).json({ message: "Fill all the fields." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: `Email already exists. Use a different email.` });
    
    const newUser = await User.create({
        email,
        username,
        password
    });
    console.log(`New user created successfully: ${newUser.username}`);

  } catch (error) {
    console.log(`Error during signup: `, error);
  }
}
