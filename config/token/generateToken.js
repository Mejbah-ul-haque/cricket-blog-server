const jwt = require('jsonwebtoken');



const generateToken = id =>{
  return jwt.sign({id}, "mykeys", {expiresIn: "30d"});
};