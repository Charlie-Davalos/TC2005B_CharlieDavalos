const { info } = require('console');
const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/creativo',(req,res) => {
    res.render('creativo.ejs')
});

router.get('/',(req,res) => {
    data = fs.readFileSync("./DatosDelaForma.json")
    let info = JSON.parse(data);
    res.render('index.ejs',{
        nombre: info.nombre,
        correo: info.correo,
    })
});
module.exports = router;