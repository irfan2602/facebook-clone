const express = require('express')
const router = new express.Router()
const User = require('../models/users')
require('../db/connection')



/* using promises */
/* app.post('/users', (req,res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save().then(() =>{
        res.status(201).send(user)
    }).catch((error) =>{
        res.status(301).send(error)
    })
    
}) */

/* using aysnc await */
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        const saveUser = await user.save()
        res.status(201).send(saveUser)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users', async (req, res) => {
    try {
        const getUsers = await User.find()
        console.log(getUsers)
        res.status(201).send(getUsers)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const filterUser = await User.findById(_id);
        console.log(filterUser);

        if (!filterUser) {
            return res.status(404).send()
        }
        else {
            res.status(201).send(filterUser)
        }

    } catch (e) {
        res.send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const deleteUser = await User.findByIdAndDelete(_id)
        if (!deleteUser) {
            return res.status(400).send()
        } else {
            res.status(200).send(deleteUser)
        }

    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const updateUser = await User.findByIdAndUpdate(_id, req.body)
        res.status(200).send(updateUser)
    } catch (e) {
        res.status(404).send(updateUser)
    }

})

module.exports = router