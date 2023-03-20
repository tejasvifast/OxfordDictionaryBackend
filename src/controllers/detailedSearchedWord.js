const mongoose = require('mongoose')
const axios = require('axios')

const detailedSearchedWord = async function(req, res){
    try{
        let wordId = req.query.word
        const options = {
            url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' + wordId,
            method: "GET",
            headers: {
                'app_id': "76883e9a",
                'app_key': "d39b0f5de104ff97e9d85bd117cdbcd1" 
            }
        };
        let result = await axios(options)

        //console.log(result,">>>>>>>>>>.")
        var result1=result.data.results[0].lexicalEntries[0].entries[0].senses[0]
        let result2=result.data.results[0].lexicalEntries[0].lexicalCategory.text 
        if(result1.hasOwnProperty('crossReferenceMarkers')){
            result1=result.data.results[1].lexicalEntries[0].entries[0].senses[0].definitions[0]
        }
        else{
            result1=result.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
        }
        let obj={}
        obj.word = wordId
        obj.origin=result.data.results[0].lexicalEntries[0].entries[0].etymologies[0]
        if(result1!==undefined) obj.meaning=result1
        if(result2!==undefined) obj.grammar=result2
        console.log(obj,"obj***********");
        res.send(obj)
        //send an alert via frontend "word added to your vocabulary"
    }
    catch(err){
        return res.status(500).send({ status: false, msg: "Error", error: err.message });
    }
}

module.exports = {detailedSearchedWord}