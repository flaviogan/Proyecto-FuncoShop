const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home',(req,res)=>{res.sendFile(__dirname + '/public/index.html')});
app.get('/',(req,res)=>{res.send('pong')});

app.listen(4002,()=>console.log(`este es el server http://localhost:4002`));


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
