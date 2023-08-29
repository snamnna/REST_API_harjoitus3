require('dotenv').config() //Tällä saadaan .env tiedostosta tiedot

const express = require('express') //Express library
const app = express() //Luo appin, jota käytetään serverin konfiguroinnissa
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//Tämä käyttää middlewarea
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server has started'))