const { Router } = require('express');
const { createUser } = require('./controllers/UserController');


const router = Router();


router.post("/user", createUser)


module.exports = router