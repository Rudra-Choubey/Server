const express = require('express')
const app = express()
const PORT = 8080;
app.use(express.static('public'));
app.listen(8080, function(){
  console.log(`Listening at port ${PORT}`)
})
