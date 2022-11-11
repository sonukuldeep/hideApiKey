const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')

//Env vars
const API_KEY = process.env.API_KEY

//init cache
let cache = apicache.middleware

router.get('/', cache('2 minutes'), async (req, res) => {
    try {
        // const apiRes = await needle('get', `${API_KEY}`, { headers: {"Accept": "application/json"} })
        
        // const data = apiRes.body
    
        // res.status(200).json(data)
        res.status(200).json({API_KEY})
        
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = router