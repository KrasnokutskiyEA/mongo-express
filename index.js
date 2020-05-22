const express = require('express')
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://KrasnokutskyEA:1Vshnukrshna@cluster0-lycgw.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
let db // database
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

// Initialize connection
client.connect((err, client) => {
  err && console.log(err)
  db = client.db('test')
  app.listen(PORT)
})

// get users
app.get('/api/users', (req, res) => {
  db.collection('devices').find().toArray((error, documents) => {
    error && console.log(error)
    res.send(documents)
  })
})

// create user
app.post('/api/users', (req, res) => {
  db.collection('devices').insertOne(req.body, (error, result) => {
    error && console.log(error)
    res.send(result.insertedId)
  })
})
