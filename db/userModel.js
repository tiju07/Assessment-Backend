const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username!"],
        unique: [true, "Username already exists!"],
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    dob: {
        type: Date,
        required: [true, "Please provide your date of birth!"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    }
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
