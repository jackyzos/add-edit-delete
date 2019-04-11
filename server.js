const express = require('express')
const path = require('path')
var cors = require('cors')
var bodyParser = require("body-parser");
const uuidv4 = require('uuid/v4')

const sqlite = require('sqlite')


const app = express();

app.use(bodyParser.json());
app.use(cors())

// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(path.resolve(), 'public')))

let database

sqlite.open('./db/test.sqlite').then(database_ => {
  database = database_
})

// get all records from database
app.get('/cities', (req, res) => {
    database.all('SELECT * FROM cities').then(rows => {
      res.send(rows)
    })
})
// post a city into database
app.post('/cities', (req, res) => {
    database.run('INSERT INTO cities VALUES (?,?,?)',
        [uuidv4(), req.body.name, req.body.population]
    ).then(() => {
        database.all('SELECT * FROM cities').then(cities => {
          res.send(cities)
        }) // db all end
        res.status(201)
    }) //db close
})

// delete city from database
app.delete('/cities/:id', (req, res) => {
    database.run('DELETE FROM cities WHERE id=?;',
        [req.params.id]
    ).then(() => {
        database.all('SELECT * FROM cities').then(cities => {
            res.send(cities)
        }) // db all end
        res.status(201)
    }) //db run close
})
// update a city from database
app.put('/cities/:id', (req, res) => {
    database.run('UPDATE cities SET name=?, population=? WHERE id=?;',
        [req.body.name, req.body.population, req.params.id]
    ).then(() => {
        database.all('SELECT * FROM cities').then(result => {
            res.send(result)
        }) // db all end
        res.status(201)
    }) //db run close
}) // app del close

app.listen(3000, () => console.log('Im running at 3000!'))
