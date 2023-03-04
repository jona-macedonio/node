const express = require('express');
const hbs = require('hbs');
require('dotenv').config(); // Configuramdo las variables de entorno
const app = express();


const port = process.env.PORT;
//  TODO: require('hbs');

// !Headlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
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

  res.render('generic',{

    nombre: 'Jonathan Macedonio',
    titulo: 'Curso Node'
    
  });
  // res.sendFile(__dirname + '/public/generic.html');

});

app.get('/elements',(req,res) => {

  res.render('elements',{

    nombre: 'Jonathan Macedonio',
    titulo: 'Curso Node'
    
  });
  // res.sendFile(__dirname + '/public/elements.html');

});


app.get('*',(req,res) => {

  // Mandar algo que este en la ruta publica
  res.render('404')
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });