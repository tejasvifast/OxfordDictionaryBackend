const express = require('express')
const router = express.Router()

const {searchedWordandDb} = require('../controllers/searchWordandAddtoDb')
const {getAllAddedWords} = require('../controllers/getAllAddedWordsController')
const {detailedSearchedWord}=require('../controllers/detailedSearchedWord')

router.post('/Dictionary', searchedWordandDb)
router.get('/getAddedWords', getAllAddedWords)
router.post('/wordDetails', detailedSearchedWord)

module.exports = router