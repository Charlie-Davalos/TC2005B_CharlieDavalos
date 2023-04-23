const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/datos', (request, response, next) => {
    response.render('forma.ejs')
});

router.post('/datos', (request, response, next) =>{
    // Here it goes the code for POST form
    console.log(request.body)
    fs.writeFileSync("DatosDelaForma.JSON", JSON.stringify(request.body,null,2))
    response.status(403).redirect('/')
})

module.exports = router;