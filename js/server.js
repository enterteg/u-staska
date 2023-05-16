const express = require('express')
const path = require('path')

const app = express()

const staticPath = path.join(__dirname, '../')

app.use('/', express.static(staticPath))
app.listen(3000, () => console.log('listening on port 3000'))