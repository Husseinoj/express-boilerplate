import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import mongoose from '../../config/database';
import profileSchema from '../../db/db.schema';

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
   
  return await jwt.sign(payload, 'privateKey')
}

export default mongoose.model('Profile', schema);