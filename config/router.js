import express from 'express';

// import controllers
import {signIn, signUp} from '../app/controllers/profile.controller';
// import user from '../app/controllers/profile.controller';

const router= express.Router();

// Auths
router.post('/auth/signup', signUp())
router.post('/auth/singin', signIn())

// Users
// router.get('/users',user.index())
// router.get('/user/:id',user.show())
// router.put('/user/:id',user.update())
// router.delete('/user/:id',user.delete())
// router.post('/user',user.create())


export default router;