const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/facebook-clone')
.then(() => console.log(`Connection successful`))
.catch((error) => console.log(`Connection Failed!`))