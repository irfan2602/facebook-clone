const e = require('express')
const express = require('express')
require('./db/connection')
const User = require('./models/users')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

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
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        const saveUser = await user.save()
        res.status(201).send(saveUser)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req,res) =>{
    try {
        const getUsers = await User.find()
        console.log(getUsers)
        res.status(201).send(getUsers)
    }catch(e){
        res.status(400).send(e)
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const filterUser = await User.findById(_id);
        console.log(filterUser);
        
        if(!filterUser){
            return res.status(404).send()
        }
        else {
            res.status(201).send(filterUser)
        }

    }catch(e) {
        res.send(e)
    }
})

app.listen(PORT, () => {
    console.log(`Connection successful at ${PORT}`)
})