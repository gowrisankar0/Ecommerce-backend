const express =require("express");
const app =express();
const cors =require("cors");
const connectDb =require("./config/db")
const PORT =process.env.PORT || 4000;
const dotenv =require("dotenv");
dotenv.config();
const User =require("./models/User");
const mongoose=require("mongoose");
const userRouter =require("./routes/users")

connectDb()

app.use(cors());
app.use(express.json({limit:"10mb"}))

app.use("/user",userRouter)
app.get("/",(req,res)=>{
    res.send("Api is working")
});


// app.post("/signup", async (req, res) => {
//     // console.log(req.body);
//     const { email } = req.body;
  
//     User.findOne({ email: email }, (err, result) => {
//       // console.log(result);
//       console.log(err);
//       if (result) {
//         res.send({ message: "Email id is already register" });
//       } else {
//         const data = User(req.body);
//         const save = data.save();
//         res.send({ message: "Successfully sign up"});
//       }
//     });
//   });
  


app.listen(PORT,()=>{
    console.log("server is up and running");
})