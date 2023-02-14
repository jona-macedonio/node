const express = require('express')
const app = express();

const port = 8080;
//  TODO: require('hbs');
app.set('view engine', 'hbs');

// Servir una pagina estatica
app.use( express.static('public') ); // Siempre tiene prioridad sobre los response que sigan

/* app.get('/', function (req, res) {
  res.send('home page')
}); */

app.get('/',(req,res) => {

  res.render('home',{

    nombre: 'Jonathan Macedonio',
    titulo: 'Curso Node'
    
  });

});

app.get('/generic',(req,res) => {

  res.sendFile(__dirname + '/public/generic.html');

});

app.get('/elements',(req,res) => {

  res.sendFile(__dirname + '/public/elements.html');

});


app.get('*',(req,res) => {

  // Mandar algo que este en la ruta publica
    res.sendFile(__dirname + '/public/404.html');

});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })