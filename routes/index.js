const express = require('express')
const router = express.Router()
const apicache = require('apicache')

//Env vars
const apiKey = process.env.apiKey
const authDomain = process.env.authDomain
const databaseURL = process.env.databaseURL
const projectId = process.env.projectId
const storageBucket = process.env.storageBucket
const messagingSenderId = process.env.messagingSenderId
const appId = process.env.appId
const API_KEY = {apiKey,authDomain,databaseURL,projectId,storageBucket,messagingSenderId,appId}

//init cache
let cache = apicache.middleware

router.get('/', cache('2 minutes'), (req, res) => {
    try {
        
        res.status(200).json({API_KEY})
        
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = router
