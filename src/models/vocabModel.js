const mongoose = require('mongoose')

const dictionarySchema = new mongoose.Schema({
    word: String,
    meaning: String,
    grammar: String
})

module.exports= mongoose.model("Word", dictionarySchema);