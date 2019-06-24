const express    = require('express')
const app        = express()

const PORT = 3000
app.use(express.json())
app.use(express.static('public'))
// app.get('/', (req, res) => {
//   // res.send('Hola from server')
// })
app.listen(PORT, () => {
  console.log(`node-express listening on...  ${PORT}`);
});