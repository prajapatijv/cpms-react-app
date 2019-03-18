const express = require('express')
const users = require('./data/users.json')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'));

app.get('/api/users', (req, res) =>
    res.status(200).json(users)
)

app.listen(port, () => console.log('CMPS app server running on port ' + port + ' with a ' + delay/1000 + ' second delay'))