const mongoose = require('mongoose')
const axios = require('axios')

const dictionaryModel = require('../models/vocabModel')

const getAllAddedWords = async function(req, res){
    try{
    const listOfAllWords = await dictionaryModel.find()
    return res.status(200).send(listOfAllWords)
}
catch(err){
    return res.status(500).send({ status: false, msg: "Error", error: err.message });
}
}

module.exports = {getAllAddedWords}