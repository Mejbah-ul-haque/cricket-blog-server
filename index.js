const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const dbConnect= require("./config/db/dbConnect");
const cors = require("cors");
require("dotenv").config();

const app = express();
//DB
dbConnect();
console.log(process.env);
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// commenting
//blogUser 
//5sJOqYETD2U9iHXn



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Cricket Blog listening on port ${port}`);
});