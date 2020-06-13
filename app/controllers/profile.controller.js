import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Profile from '@app/models/profile.model';


// /auth/signup
export async function signUp(req, res) {
    try {
        const userInfo = req.body;

        const profile = await Profile.findOne({ user_name: userInfo.user_name });

        if(profile) 
            return res.status(400).json({
                message: "User Already Exists"
            });
        
        const newProfile = new Profile(userInfo);

        await newProfile.save();
        const token = await newProfile.generateToken();

        res.status(200).json({token: `bearer ${token}`})
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// /auth/signin
export async function signIn(req, res) {
    try {
        const userInfo = req.body;
        
        const user = await Profile.findCredential(userInfo.user_name, userInfo.password);

        const token = await user.generateToken();

        res.status(200).json({token: `bearer ${token}`})

    } catch(error) {
        //TODO: create error handler method
        res.status(500).json({
            message: error.message
        }) 
    }
}

export async function show(req, res) {
    try {
        const user = await Profile.findById(req.user.id);
        
        if(!user) {
            return res.status(401).json({
                message: "Invalid user"
            })
        }
        res.status(200).json({
            message: user
        });

    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}