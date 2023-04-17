// Funciones de ayuda
function ___(str){
    return document.getElementById(str);
};



// 1
function potencias() {
    let num = prompt("Ingresa hasta que número deseas obtener información", "10");
    if (num != null) {
        str = "";
        for (let i = 0; i < num; i++) {
            num_cuadrado = (i+1)*(i+1);
            num_cubo = (i+1)*(i+1)*(i+1);
            str += "Para el número: "+ (i+1) + " | Su cuadrado es: " + num_cuadrado + "| Su cubo es: " + num_cubo + "<br>";
        }
    ___("contador_resultado").innerHTML += str;
    }
}


// 2
function suma() {
    ini_time = new Date();
    num_1 = Math.floor(Math.random()*10);
    num_2 = Math.floor(Math.random()*10);
    str = `¿Cuál es el resultado de la sumatoria de ${num_1} + ${num_2}?`
    resultado = num_1 + num_2;
    ___("demo_suma").innerHTML = str;

    let num = prompt(str); 
    
    if (num != null) {
        final_time = new Date();
        if (num == num_1+num_2) {
            str = "Correcto!";
        } else {
            str = "Incorrecto";
        }
        let timeDiff = final_time - ini_time; // el valor está en ms
        timeDiff/= 1000;

        let seconds = Math.round(timeDiff);
        ___("suma").innerHTML += "<br>"+ str + ` el tiempo de respuesta fue: ${seconds} segundos`;
    }
}

// 3
const arreglo = ["2","3","0","10","20","0","-3","-345","34","12","-63","-33","3","0"]
function contador(arreglo) {
    let negative=0;
    let zeros=0;
    let moreThanZero=0;
    
    for (let i=0; i<arreglo.length; i++) {
        if(arreglo[i] > 0){
            moreThanZero++; 
            console.log(arreglo[i]);
        }else if(arreglo[i] == 0){
            zeros++;
        } else {negative++}
    };
    
    ___("demo_contador").innerHTML = "el arreglo fue: " + arreglo;
    ___("contador").innerHTML = `Cantidad de ceros: ${zeros}, <br>Cantidad de mayores a cero: ${moreThanZero}, <br>Cantidad de negativos: ${negative}`;
};

function auxiliar_contador() {
    contador(arreglo);
}

// 4
const vector = [ [1,2,3],[4,5,6],[7,8,9] ];

function promedios(matriz) {
    str = "";
    ___("demo_matriz").innerHTML = "valores de matriz (3 por renglon)" + matriz;
    for ( i=0 ; i < matriz.length; i++) {
        sumar = 0
        result = 0
        for (j = 0; j < matriz[i].length; j++) { 
            sumar += matriz[i][j];
        }
        result = sumar / matriz[i].length;
        str += "Renglon " + matriz[i] + " | promedio: " + result + "<br>";
        
    }
    console.log("me repito: " + i);
    ___("promedios").innerHTML = str;
}


function auxiliar_promedios() {
    promedios(vector);
}

// 5
function inverso(){
	let s = prompt("Ingresa tu número: ");
	const splitString = s.split("");
	var reverseArray = splitString.reverse();
	var str = reverseArray.join("");
    ___("demo_inverso").innerHTML = "valor ingresado: " + s;
    ___("inverso").innerHTML = "valor inverso: " + str;

}

// 6
function fb(n) {
    var a, b, res;
    a = 0;
    b = 1;
    for (var i = 2; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
    }
    ___("demo_fib").innerHTML = "La posición que escogiste fue: " + n;
    ___("fib").innerHTML = "El número es: " + res;
}

function aux_fib() {
    n = prompt("Ingresa un numero de fib que quieras calcular: ");
    fb(n);
}