// variables, constantes, consola (log, )

let pulpos_mundial = "Paul";

var pulpos_boys = "Timoty";

const precio_comida_pulpos = 99.99;

console.log(pulpos_mundial);
console.warn("Cuidado");
console.assert(1 === 1);
console.assert(true === 1);
console.assert(true == 1);

console.error("Error")

console.log("Precio: " + precio_comida_pulpos);

// alert, prompt, confirm

alert("Esto es una alerta")

const nombre = prompt("¿Cómo te llamas?");

console.log("Hola," + nombre + "!");

const is_hungry = confirm("¿Tienes hambre?");

// Funciones tradicionales

function comer() {
    const comida = "Picadillo";
    console.log(comida);
    return true;
};

const comida = comer;

if(!is_hungry){
    alert("Tienes que comer bien aunque no tengas hambre :(");
}else {
    alert("Ya mero es l ahora de la comida ;) ");
    comida();
};


// Funciones Modernas

const anon = () => console.log("anónimo");

anon();

const platillo_fuerte = (platillo) => {
    console.log("El " + platillo + "está delicioso");
};

platillo_fuerte("tamal_oaxaqueño");
platillo_fuerte();

// Arreglos

const menu = ["Papa al horno", "Papas fritas", "Sopa de papa", "Tortilla de papa"];

console.log(menu);

// obtiene el index del arreglo
for(let p in menu){
    console.log(menu[p]);
};

// obtiene cada uno de los elementos en si del arreglo
for(let p of menu){
    console.log(p);
};

menu[10] = "Pasta";
console.log(menu);

menu.length = 2;
console.log(menu);

menu.push("Pizza")
console.log(menu);

// arreglos asociativos
menu["postre"] = "Ate con queso";
console.log()


// HTML dinámico con eventos
function ___(str){
    return document.getElementById(str);
};

const boton = ___("imagen");

boton.onclick = () => {
    console.log("Click!");
    ___("contenedor_imagen").innerHTML = 
    '<img src="https://pbs.twimg.com/media/ErpZ3_dXYAQ3BA_.jpg" alt="imagen de un pulpo enojado">';
};

