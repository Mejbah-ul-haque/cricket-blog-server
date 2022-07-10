const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect= require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const cors = require("cors");
const { errorHandler } = require("./middlewares/error/errorHandler");
require("dotenv").config();

const app = express();

console.log(process.env);
const port = process.env.PORT || 5000;

//DB
dbConnect();

app.use(cors());

// Middleware
app.use(express.json());

// User Route
app.use('/api/users', userRoutes);

//error handler
app.use(errorHandler);
//server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Cricket Blog listening on port ${port}`);
});