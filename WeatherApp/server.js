if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const W_API_KEY = process.env.API_KEY
const bodyParser = require('body-parser')
const express    = require('express')
const app        = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = 3000
app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
  console.log('this is the body')
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log(`node-express listening on...  ${PORT}`);
});