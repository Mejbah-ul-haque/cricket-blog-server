const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/user/User");


//---------------------------------------------
//Register
//---------------------------------------------

const userRegisterCtrl = expressAsyncHandler(async(req, res) => { 
  //Check if user exist
  const userExists = await User.findOne({email: req?.body?.email});
  
  if (userExists) throw new Error("User already exists");
  try {
    //Register user
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password, 
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});


//---------------------------------------------
//Login User
//---------------------------------------------

const loginUserCtrl = expressAsyncHandler(async (req, res) =>{
  const {email, password} = req.body;
  //check if user exists
  const userFound = await User.findOne({email});
  // Check if password is match
  if(userFound && (await userFound.isPasswordMatched(password))){
    res.json(userFound);
  }
  else {
    res.status(401);
    throw new Error("Invalid Login Credentials");
  }
});


module.exports = {userRegisterCtrl, loginUserCtrl};