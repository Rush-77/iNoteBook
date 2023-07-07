const connectToMongo = require('./db.js')
const express = require('express')

connectToMongo()
const app = express()
const port = 5000

app.use(express.json()) //to get request body data

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth/',require('./routes/auth.js'));
app.use('/api/note/',require('./routes/note.js'));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})