const express = require('express')
const router = express.Router() //Tällä saadaan router expressistä
const Subscriber = require('../models/subscriber')

//Konfiguroidaan routet

//Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.json(500)({message: err.message}) //500 on database error
    }
})

//Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber) //201 tarkoittaa että loit jotakin
    } catch (err) {
        res.status(400).json({message: err.message}) //Jos user antaa sopimatota dataa, lähetetään 400 error, vika käyttäjässä ei serverissä
    }
})

//Updating one
router.patch('/', (req, res) => {
    
})

//Deleting one
router.delete('/:i', (req, res) => {
    
})

module.exports = router