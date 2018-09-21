const express = require('express')
const router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
})

router.get('/', (req, rest) => {
  res.send('Initial Home Page Router test');
})

router.get('/about', (req, res) => {
  res.send('Sobre minha aplicação');
})

module.exports = router;