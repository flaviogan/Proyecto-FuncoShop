const express = require('express');
const methodoverride = require('method-override');

const app = express();

//motor de plantillas
app.set('view engine','ejs');
app.set('views', __dirname + 'src/views');

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
require('dotenv').config();

//const PORT= process.env.PORT;
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());


app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/',mainRoutes);
app.use('/shop',shopRoutes);
app.use(methodoverride('_method')); 

const fs = require('fs');
const path = require('path');

//const app = express();

app.get('/',(req,res)=>{res.send('pong')});
app.get('/personajes/:id', (req, res) => {
    const dibujo = path.join(__dirname, 'src', 'data', 'personajes.json');

    fs.readFile(dibujo, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el archivo');
        }

        const personajes = JSON.parse(data);
        const personaje = personajes.find(p => p.id === parseInt(req.params.id));

        if (!personaje) {
            return res.status(404).send('Personaje no encontrado');
        }

        return res.json(personaje);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto http://localhost:${port}`));


//version anterior
// app.get('/home',(req,res)=>{res.sendFile(__dirname + '/public/index.html')});
// app.get('/',(req,res)=>{res.send('pong')});

// app.listen(4002,()=>console.log(`este es el server http://localhost:4002`));

//fin version anterior



// const port = 4000;

// app.get("/home", (req, res)=>{
//     res.send("estoy en home...");
// });

// app.get("/home", (req, res)=>{
//     res.send("Hoy estoy probando las actualizaciones");
// });
// app.listen(port, ()=>{
//     console.log(`app listening http://localhost:${port}`);
// });

// app.use(express.static('public'));
