import express from 'express';

// import controllers
import {signIn, signUp} from '../app/controllers/profile.controller';

const router= express.Router();

// Profile
router.post('/auth/signup', signUp())
router.post('/auth/singin', signIn())


export default router;