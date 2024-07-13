import exp from "constants";
import mongoose from "mongoose";
import { type } from "os";
import bcrypt from "bcryptjs"

const userSchemas = mongoose.Schema({

    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
    
});

userSchemas.pre('save',async function(next){

    const user = this;
    if(!user.isModified('password')){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hasPassword;

    } catch (error) {
        next(error);
    }
})

export default mongoose.model("passwordBcrypt",userSchemas);