const express = require("express")

const {home, createUser, getUsers, deleteUser, editUser} = require("../Controllers/userController.js")


const router = express.Router();

router.get("/home", home)
router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.put('/edituser/:id', editUser)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router