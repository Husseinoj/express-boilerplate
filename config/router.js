import express from 'express';

// import controllers
import auth from '../app/controllers/auth.controller';

const router =express.Router();

// Auths
router.post('/auth/signup',auth.signup())
router.post('/auth/singin',auth.signin())

// Users
router.get('/user',auth.index())
router.get('/user/:id',auth.show())
router.put('/user/:id',auth.update())
router.delete('/user/:id',auth.delete())
router.post('/user',auth.create())


export default router;