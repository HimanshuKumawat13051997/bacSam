import { User } from "../models/user.model.js";


const registerUser = async (req, res) => {
  const {email, password, longitude, latitude} = req.body;
  console.log(email)

  if (
    [email, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new Error("Email and password are required");
  }

  let existedUser = await User.findOne({
    where: {
      email: email
    }
  })

  if (existedUser) {
    throw new Error("Email is already in use");
  }
  
  const user = await User.create({
    email: email,
    password: password,
    longitude: longitude,
    latitude: latitude
  });

  let createdUser = await User.findByPk(user.id)

  if (!createdUser) {
    throw new Error("User not found");
  }

  return res
    .status(201)
    .json(createdUser);
}

const loginUser =  async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({
    where: {
      email: email,
      password: password
    }
  })

  if (!user){
    throw new Error("Invalid email or password");
  }

  return res
  .status(200)
  .cookie("latitude", user.latitude)
  .cookie("longitude", user.longitude)
  .json(user.email);
}

export {
  registerUser,
  loginUser
};
