require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public', express.static('public'))


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))