const fs = require('fs');
function save(data) { 
    return fs.writeFileSync("DatosDelaForma.JSON", JSON.stringify(data,null,2))
};
function read(){
    return fs.readFileSync("DatosDelaForma.JSON")
}
module.exports = {
    save,
    read,
}