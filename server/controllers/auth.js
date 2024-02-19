import User from '../models/User.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async(req,res, next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash});

        await newUser.save();

        const token = jwt.sign({id: newUser._id}, process.env.JWT);
        res.cookie('access_token', token,{
            httpOnly: true,

        }).status(200).json(newUser);
    }catch(err){
        next(err);
    }
};