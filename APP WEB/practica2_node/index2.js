//SERVIDOR EN EXPRES
/*
primer ejemplo de un servidor construido con la libreria expres, vino despues del construido en node puro
*/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})