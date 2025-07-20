import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'User Name is required'],
        trim : true,//Trims the empty spaces
        minLength : 2,
        maxLength : 50, 

    },

    email:{
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim : true,//Trims the empty spaces
        lowercase: true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        minLength : 5,
        maxLength : 255,

    },

    password: 
    {
        type: String,
        required: [true, 'User Password is required'],
        minLength : 6,
    },



}, 
{
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema); // Create a user model based on userSchema

export default User; 