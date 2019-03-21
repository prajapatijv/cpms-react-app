const express = require('express')
const users = require('./data/users.json')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
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
    .use(cors())
    .use('/', express.static('./dist/img'));

app.get('/api/users/:criteria?', (req, res) =>
    setTimeout(() =>
        res.status(200).json(
            users.filter(byFullNameName(req.params.criteria))
        )
    ,delay)
)

app.post('/api/users', (req, res) =>
    res.status(200).json({})
)

app.delete('/api/users/:id', (req, res) =>
    res.status(200).json({})
)

app.listen(port, () => console.log('CMPS app server running on port ' + port + ' with a ' + delay/1000 + ' second delay'))