const express = require('express');
const { route } = require('../app');
const { addUser, findUser, findSingleUser, updateUser, deleteUser } = require('../controlleur/user.controller');
const router = express.Router();


// add users
router.post('/users', addUser)


// find all users
router.get('/users', findUser)


// find single users
router.get('/users/:id', findSingleUser)


// add users
router.put('/users/:id', updateUser)

// add users
router.delete('/users/:id',deleteUser )



module.exports= router;