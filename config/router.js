import express from 'express';

// middleware 
import auth from '../app/middleware/auth'
// import controllers
import {
        show, 
        signIn, 
        signUp } from '../app/controllers/profile.controller';

const router= express.Router();

/* 
 * Profile Entity
 */
    // now authorized
    router.post('/auth/signup', signUp);
    router.post('/auth/signin', signIn);
    // authorized
    router.get('/me', auth, show);

export default router;