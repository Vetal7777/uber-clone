const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = 4001

axios.defaults.baseURL = process.env.GOOGLE_MAPS_API_URL

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

    let data = await axios.get(
      'place/autocomplete/json' +
        '?input=' +
        req.params.address +
        '&types=address' +
        '&key=' +
        process.env.GOOGLE_MAPS_API_KEY
    )
    res.status(200).json(data.data.predictions)
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
