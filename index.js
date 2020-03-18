const express = require('express'); //require: palavra chave p usar a livraria, express
const bodyParser = require('body-parser');
const app = express(); //reatribui o express a 'app'

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json);

//criando um objeto global
let usuario = {
    nombre:"",
    apelido:""
};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

app.get('/', function(req, res) {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
});

app.get('/usuario', function (req, res) {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    };
    if (usuario.nombre === '' || usuario.apelido === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado'
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'respuesta del usuario'
        };
    }
    res.send(respuesta);
});


let teste = {/*Exemplo de funcionalidades de GET e POST
app.get('/', function (req, res) { //declaracion, ruta de entrada p express, obtem a petição - o q vai aparecer na tela...
    res.send('Saluto desde express');
});

app.get('/info', function (req, res) { //'/info' p nevegador-URL
    res.send("[GET]vai palmeiras");
});

app.post('/info', function (req, res) { //'/info' p POSTMAN
    res.send("[POST]vai palmeiras");
});
*/
};

app.listen(PORT, () => { //objeto de express p llamar 
    console.log('el servidor está iniciando en el puerto 3000');
});
