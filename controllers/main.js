const express = require('express')
const router = express.Router()
const projects = require('../models/projects.json')
const about = require('../models/about.json')


router.get('/home', (req, res) => {
    res.send('Welcome')
})

router.get('/projects', (req, res) => {
    res.json(projects)
})

router.get('/about', (req, res) => {
    res.json(about)
})

module.exports = router