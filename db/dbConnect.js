const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
    mongoose
        .connect(
            "mongodb+srv://tijulukose0402:Tiju123@cluster0.auktjfy.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas!");
        })
        .catch((error) => {
            console.log("Unable to connect to MongoDB Atlas!");
            console.error(error);
        });
}

module.exports = dbConnect;
