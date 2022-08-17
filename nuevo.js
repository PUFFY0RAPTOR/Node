const express = require('express');
const app = express();
const path = require('path');
//app.listen(3090);

//const PORT = process.env.PORT || 3090; //Se pregunta el puerto que es de mi aplicación en el servidor.

app.listen(p = process.env.PORT || 4000, () => {
    console.log(`Ejecutando ando Node en puerto ${p}`);
});

app.set('views', path.join(__dirname, 'src/views/'));
app.set('view engine', 'ejs');
//app.use(express.static('src/static/css'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootsrap/dist/css')))
//app.use('/js', express.static(path.join(__dirname, 'node_modules/bootsrap/dist/js')))
//app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


//El render renderiza la página, en palabras mías, la carga
app.get('/', (req, res) =>{
    res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render("pages/about");
});

app.get('/error', (req, res) => {
    res.render("pages/error");
});

//Listar
app.get('/listar', function(req, res) {
    var Aprendices = [
        { nombre: 'Sebastian', ficha: 2364481, promedio: 3},
        { nombre: 'Juan', ficha: 2987563, promedio: 5},
        { nombre: 'Mob', ficha: 100, promedio: 1}
    ];
    var tagline = "Programando ando en Node.";

    res.render('pages/listar', {
        matriculados: Aprendices,
        lema: tagline
    });
});

//Registro
app.get('/registrar', (req, res) =>{
    res.render('pages/registrar')
});








/*app.get('/', (req, res) =>{
    res.send('Hola mundo!!!');//Responder enviando Hola mundo
});*/
