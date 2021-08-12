const express = require('express')
const router = express.Router()
const List = require("../models/donorlist")


//@API http:localhost:****/api/list
//@desc Add new User
//@access public
    router.post("/", (req, res) => {
    const newUser = new List({ ...req.body })
    newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err))
})

//@API http:localhost:****/api/list
//@desc Get all users
//@access public
router.get("/", (req, res) => {
    List.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.send(err))
})

//@API http:localhost:***/api/list/:id
//@desc Get user by id
//@access public
router.get("/:_id", (req, res) => {
    // let id=req.params.id
    let { _id } = req.params
    List.find({ _id })
        .then(user => res.send(user))
        .catch(err => res.send(err))
})

//@API http:localhost:/****/api/list/:id
//@desc Delete user by id
//@access public
router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    List.findByIdAndDelete({ _id })
        .then(() => res.send("User has been deleted"))
        .catch(err => res.send(err))
})

//@API http:localhost:****/api/list/:id
//@desc Update user by id
//@access public
router.put("/:_id", (req, res) => {
    let { _id } = req.params
    List.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("User has been updated"))
        .catch(err => res.send(err))
})


module.exports = router