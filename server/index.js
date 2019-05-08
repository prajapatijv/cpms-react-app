const express = require('express')
const delay = require('express-delay')
const { port = 3333 } = require('minimist')(process.argv)
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./data/users.json')
const items = require('./data/items.json')
const categories = require('./data/categories.json')
const assets = require('./data/assets.json')

//Server setup
const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json()) // for parsing application/json    
    .use(delay(1000, 4000))
    .use(cors())
    .use('/', express.static('./dist/img'));

//Wildcards
app.post('/api/*', (req, res) => {    console.log(req.body);    res.status(200).json(req.body)})
app.delete('/api/*/:id', (req, res) =>    res.status(200).json({}))

//Gets
app.get('/api/users', (req, res) => res.status(200).json(users))
app.get('/api/items', (req, res) => res.status(200).json(items))
app.get('/api/categories', (req, res) => res.status(200).json(categories))
app.get('/api/assets', (req, res) => res.status(200).json(assets))


app.listen(port, () => console.log('App server running on port ' + port + ' with random delay'))