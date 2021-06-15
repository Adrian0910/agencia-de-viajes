
// importar express
// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

//ejecutar
const app = express();

//conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

// Definir puerto
const port = process.env.PORT || 4000;
/* 
    SIEMPRE es importante separar las rutas de acuerdo al MVC
*/

// Habilitar PUG
app.set('view engine', 'pug');

//Nuestro propio middleware (obtener el año actual)
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router); //.use soporta todos los verbos

//Hace la magia
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});

