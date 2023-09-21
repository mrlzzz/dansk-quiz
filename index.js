//Server-side script

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, '/static')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



