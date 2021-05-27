const express 	= require('express');
const path 		= require('path');

const app 	= express();
const port 	= 3000

app.use(express.static(__dirname + 'src/views'));

//app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/home', (req, res) => {
  //res.render('index.html');
  res.sendFile(path.join(__dirname, '../views/index.html'));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
