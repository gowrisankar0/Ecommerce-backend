const mongoose =require("mongoose");
const dotenv =require("dotenv");
dotenv.config();




const port ="mongodb+srv://gowrisankar:gowri@gowrisankar.5gykdnp.mongodb.net/e-commerce?retryWrites=true&w=majority";


const connectDb =async()=>{
    try {
        const con =await mongoose.connect(port);
        console.log(`db is connected${con.connection.host}`);
    } catch (error) {
       console.log(error.message); 
    }
    

}


module.exports= connectDb;