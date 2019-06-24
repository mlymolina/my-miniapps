if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const W_API_KEY = process.env.API_KEY
const bodyParser = require('body-parser')
const express    = require('express')
const axios      = require('axios')
const app        = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = 3000
app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.location}&appid=${W_API_KEY}`
  axios({
    url: url,
    responseType: 'json'
  }).then(data => res.json(data.data)).catch((error) => {
    console.log('Invalid City')
  })
})

app.listen(PORT, () => {
  console.log(`node-express listening on...  ${PORT}`);
});