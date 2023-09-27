const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('axios')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = 4001

axios.defaults.baseURL = process.env.GOOGLE_MAPS_PLATFORM_API_URL

app.use(bodyParser.json())
app.use(cors())

app.get('/api/address/:address', async (req, res) => {
  try {
    if (
      req.params.address === null ||
      req.params.address === '' ||
      req.params.address === 'null'
    ) {
      return ''
    }

    let data = axios.get('')
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}}`)
})
