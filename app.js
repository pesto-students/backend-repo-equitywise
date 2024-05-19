const app = require("express")();
const http = require("http").Server(app);
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shrishylepandit:b9uB6Hm730O8wzMY@equitywise.1kzmnnq.mongodb.net/?retryWrites=true&w=majority&appName=Equitywise");
const User = require("./models/userModel");

async function insert() {
  await User.create({
    name: "Krishna",
    email: "krishna@gmail.com",
  });
}
insert();

http.listen(3000, () => {
  console.log("Server is running...");
});
