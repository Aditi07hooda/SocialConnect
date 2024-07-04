import UserModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// register new users
export const registerUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password.toString(), salt);
      req.body.password = hashedPass;
  
      const oldUser = await UserModel.findOne({ email });
  
      if (oldUser) {
        return res.status(400).json({ message: "This User already exists!" });
      }
  
      const newUser = new UserModel(req.body);
      const user = await newUser.save();
  
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
  
      res.status(201).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error registering user. Please try again." });
    }
  }


// Login users

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email: email });

        if (user) {
            const validity = await bcrypt.compare(password, user.password)

            if (!validity) {
                res.status(400).json("Soory, Please enter the correct email or password!");
            } else {
              const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
                expiresIn: "1h",
              });
                res.status(200).json({ user, token });
            }
        } else {
            res.status(404).json("Soory, Please enter the correct email or password!")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}