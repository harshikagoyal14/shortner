const mongoose = require("mongoose");
require("dotenv").config();


const connect = async () => {

    try{
    await mongoose.connect(process.env.DB_URL);
    console.log("database connected");
    }
    catch(error){
        console.log("error");
    }
    
};

module.exports = connect;