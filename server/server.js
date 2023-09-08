const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000; 

app.use(express.json({limit: '50mb'}));



// serve index.html on the route '/'
app.get('/', (req, res) => {
  console.log('get/ complete')
  return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/public', 
express.static(path.join(__dirname, '../public')));

// app.get('/index.scss', (req, res) => {
//   console.log('get/ complete')
//   return res.status(200).sendFile(path.join(__dirname, '../index.scss'));
// });



app.listen(PORT); 