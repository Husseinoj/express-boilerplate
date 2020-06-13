import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import mongoose from '../../config/database';
import profileSchema from '../../db/db.schema';

const privateKey = process.env.PRIVATE_KEY;

const schema = mongoose.Schema(profileSchema);

schema.pre('save', async function(next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);

    if (!user.isModified('password')) return next();

    user.password = await bcrypt.hash(user.password, salt);

    next()
});

schema.methods.generateToken = async function () {
   const user = this;
   const payload = {
       user:{ 
           id: user.id
       }
   }
   
  return await jwt.sign(payload, privateKey)
}

schema.statics.findCredential = async function (user_name, password){
    const user = await Profile.findOne({user_name});

    if(!user) throw new Error("Invalid user!");
    
    const isMatched = await bcrypt.compare(password, user.password)
    
    if (!isMatched)  throw new Error("Password does not match!");
    
    return user;
}

const Profile =  mongoose.model('Profile', schema); 

export default Profile;