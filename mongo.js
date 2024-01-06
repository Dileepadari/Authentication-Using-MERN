const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;



mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.2asz5h9.mongodb.net/users?retryWrites=true&w=majority`,).then(()=>{
    console.log("Database connection successfull");
})
.catch(()=>{
    console.log("Database failed to connect");
});





const UserSchema = new mongoose.Schema({
    name: {
      type:String,
      required: true
    },
    email: {
      type:String,
      required: true
    },
    password: {
      type:String,
      required: true
    },
});

const User = mongoose.model("User", UserSchema);

module.exports=User