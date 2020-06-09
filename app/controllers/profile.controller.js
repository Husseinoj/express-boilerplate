import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Profile from '../models/profile.model';

 // TODO: use env for private 
const privateKey = 'privateKey';

// /auth/signup
export async function signUp(req, res) {
    try {
        const { user_name, 
                password, 
                first_name, 
                last_name, 
                age, 
                email } = req.body;
        const profile = await Profile.findOne({user_name});

        if(profile) 
            return res.status(400).json({
                message: "User Already Exists"
            });
        
        const newProfile = new Profile({
            user_name, 
            password, 
            first_name, 
            last_name, 
            age, 
            email  
        });

        const salt = await bcrypt.genSalt(10);
        newProfile.password = await bcrypt.hash(password, salt);

        await newProfile.save();
        
        const payload = {
            user:{
                id: newProfile.id
            }
        }
       
        jwt.sign(payload, privateKey, (err, token) => {
            if(err) 
                return res.status(500).json({
                    message: err.message
                })
            
            res.status(200).json({
                token
            });
        })

    } catch(e) {
        res.status(500).json({
            message: e.message
        })
    }
}

// /auth/signin
export async function signIn(req, res) {

}