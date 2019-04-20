const express = require('express')
const delay = require('express-delay')
const { port=3333 } = require('minimist')(process.argv)
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./data/users.json')
const items = require('./data/items.json')


const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    if (req.method.toLowerCase() === 'post') {
        console.log(`Body:  ${JSON.stringify(req.body)}`)
    }

    next()
}

const byFullName = criteria => user => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return user.firstName.toLowerCase().match(criteria.toLowerCase()) ||
            user.lastName.toLowerCase().match(criteria.toLowerCase())
    }
}

const byItemName = criteria => item => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return item.itemName.toLowerCase().match(criteria.toLowerCase())     
    }
}

const app = express()
    .use(logger)
    .use(bodyParser.json()) // for parsing application/json    
    .use(delay(1000, 4000))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use('/', express.static('./dist/img'));

//Users   
app.get('/api/users/:criteria?', (req, res) =>
    res.status(200).json(
        users.filter(byFullName(req.params.criteria))
    )
)

app.post('/api/users', (req, res) =>
    res.status(200).json({})
)

app.delete('/api/users/:id', (req, res) =>
    res.status(200).json({})
)


//Items
app.get('/api/items/:criteria?', (req, res) =>
    res.status(200).json(
        items.filter(byItemName(req.params.criteria))
    )
)

app.post('/api/items', (req, res) =>
    res.status(200).json({})
)

app.delete('/api/items/:id', (req, res) =>
    res.status(200).json({})
)

app.listen(port, () => console.log('CMPS app server running on port ' + port + ' with random delay'))