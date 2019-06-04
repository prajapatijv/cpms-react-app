const express = require('express')
const delay = require('express-delay')
const { port = 3333 } = require('minimist')(process.argv)
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const users = require('./data/users.json')
const items = require('./data/items.json')
const categories = require('./data/categories.json')
const assets = require('./data/assets.json')
const TOKEN_KEY = 'jwtsecret'

//Server setup
const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const jwtVerify = (req, res, next) => {
    
    if (req.url.endsWith("login") || req.method === "OPTIONS")  {
        next()
        return
    }

    const authorizationHeader = req.headers.authorization
    if (authorizationHeader.startsWith('jwt')) {
        const token = authorizationHeader.split(" ")[1]
        jwt.verify(token, TOKEN_KEY, (err,payload) => {
            if (payload) {
                req.user = payload
                next()
            }
            else {
                if (err) {
                    res.status(400).json("Bad request: Auth failed")
                }
            }
        })
    }
}

const app = express()
    .use(jwtVerify)
    .use(logger)
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json()) // for parsing application/json    
    .use(delay(1000, 4000))
    .use(cors())
    .use('/', express.static('./dist/img'));

//Wildcards
app.post('/api/login', (req, res) => { 
    console.log(req.body); 
    const authToken = generateToken(req.body)
    res.status(200).json({"userName":req.body.userName, "authToken":authToken}) 
})
app.post('/api/*', (req, res) => { console.log(req.body); res.status(200).json(req.body) })
app.delete('/api/*/:id', (req, res) => res.status(200).json({}))

//Gets
app.get('/api/users', (req, res) => {res.status(200).json(users) })
app.get('/api/items', (req, res) => res.status(200).json(items))
app.get('/api/categories', (req, res) => res.status(200).json(categories))
app.get('/api/assets', (req, res) => res.status(200).json(assets))


const generateToken = (user) => {
    var a = {
        userName:  user.userName,
        role:'admin'
    }
    
    return token = jwt.sign(a , TOKEN_KEY, {
        expiresIn: 60 *60*24 //24hrs
    })
}

app.listen(port, () => console.log('App server running on port ' + port + ' with random delay'))