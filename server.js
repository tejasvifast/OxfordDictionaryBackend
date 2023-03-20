const express = require('express')
const app = express()
const cors = require("cors")
const path = require("path")
const mongoose = require('mongoose')
const route = require('./src/routes/route')
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors('*'))

mongoose.connect("mongodb+srv://pragya_user1:tfr9Y2SlmidKsL1L@cluster0.e7bog.mongodb.net/Express-React", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

//isAdded

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolved(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, function(){
    console.log("express is running",port);
})



//https://warm-island-82496.herokuapp.com