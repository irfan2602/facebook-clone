const express = require('express')
const apiRouter = require('./apicall/index')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(apiRouter)


app.listen(PORT, () => {
    console.log(`Connection successful at ${PORT}`)
})