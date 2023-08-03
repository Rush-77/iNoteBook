const connectToMongo = require('./db.js')
const express = require('express')
const cors = require('cors')

connectToMongo()
const app = express()
const port = 5000

app.use(express.json()) //to get request body data
app.use(cors())         //for providing a Connect/Express middleware that can be used to enable CORS with various options.

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth/',require('./routes/auth.js'));
app.use('/api/note/',require('./routes/note.js'));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})