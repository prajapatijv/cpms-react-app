const express = require('express')
const delay = require('express-delay')
const { port=3333 } = require('minimist')(process.argv)
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./data/users.json')


const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    if (req.method.toLowerCase() === 'post') {
        console.log(`Body:  ${JSON.stringify(req.body)}`)
    }

    next()
}

const byFullNameName = criteria => user => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return user.firstName.toLowerCase().match(criteria.toLowerCase()) ||
            user.lastName.toLowerCase().match(criteria.toLowerCase())
    }
}
    
const app = express()
    .use(logger)
    .use(bodyParser.json()) // for parsing application/json    
    .use(delay(1000, 4000))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use('/', express.static('./dist/img'));

app.get('/api/users/:criteria?', (req, res) =>
    res.status(200).json(
        users.filter(byFullNameName(req.params.criteria))
    )
)

app.post('/api/users', (req, res) =>
    res.status(200).json({})
)

app.delete('/api/users/:id', (req, res) =>
    res.status(200).json({})
)

app.listen(port, () => console.log('CMPS app server running on port ' + port + ' with random delay'))