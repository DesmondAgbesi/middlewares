const express = require("express");
const userRouter =require("./routes/users.route");

const app = express();


app.get("/", (req, res) =>{
  res.status(200),send("Welcome to my server please use /users to get all users")
});


app.use("/users", userRouter);


app.listen(4000, () =>{
  console.log("Yarn start to meet anyone who is in the middle of the whole nation of siber")
} );