// Este es el simulador de cálculo de Alejo Cifarelli

let first_number = 0;
let second_number = 0;

//! suma start
function suma(x, y) {
    first_number = x;
    second_number = y;
    let answer = x + y;
    alert(answer);
    console.log(answer);
}

function hacer_suma() {
    first_number = Number(prompt("inserte un número entero"));
    second_number = Number(prompt("inserte otro número entero"));
    suma(first_number, second_number);
}
//! suma end
//! suma start
function suma(x, y) {
    first_number = x;
    second_number = y;
    let answer = x + y;
    alert(user_name + ", la suma es " + answer + ".");
    console.log(answer);
    let operation = new Operation("suma", answer);
    history.add_to_history(operation);
    alert(history);
    return;
}

function hacer_suma() {
    first_number = Number(prompt("inserte un número entero"));
    second_number = Number(prompt("inserte otro número entero"));
    suma(first_number, second_number);
}
//! suma end
//! resta start
function resta(x, y) {
    first_number = x;
    second_number = y;
    let answer = x - y;
    alert(user_name + ", la resta es " + answer + ".");
    console.log(answer);
    let operation = new Operation("resta", answer);
    history.add_to_history(operation);
    alert(history);
    return;
}

function hacer_resta() {
    first_number = Number(prompt("inserte un número entero para disminuír"));
    second_number = Number(prompt("inserte un número entero para sustraer"));
    resta(first_number, second_number);
}
//! resta end
//! multiplicación start
function multiplicacion(x, y) {
    first_number = x;
    second_number = y;
    let answer = x * y;
    alert(user_name + ", el producto es " + answer + ".");
    console.log(answer);
    let operation = new Operation("multiplicación", answer);
    history.add_to_history(operation);
    alert(history);
    return;
}

function hacer_multiplicacion() {
    first_number = Number(prompt("inserte un factor entero"));
    second_number = Number(prompt("inserte otro factor entero"));
    multiplicacion(first_number, second_number);
}
//! multiplicación end
//! división start
function division(x, y) {
    first_number = x;
    second_number = y;
    let answer = x / y;
    let resto = x % y;
    alert(user_name + ", el cociente es " + answer + " y el resto es " + resto + ".");
    console.log(answer);
    let operation = new Operation("división", answer);
    history.add_to_history(operation);
    alert(history);
    return;
}

function hacer_division() {
    first_number = Number(prompt("inserte un dividendo entero"));
    second_number = Number(prompt("inserte un divisor entero y distinto de 0"));
    division(first_number, second_number);
}
//! división end
//! selector start
function selector() {
    const select = prompt("Presione 1 para Suma, 2 para Resta, 3 para Multiplicación, 4 para División. Para salir presione 0.");
    switch (select) {
        case "0":
            alert("Adiós " + user_name + "!");
            break
        case "1":
            hacer_suma();
            break;
        case "2":
            hacer_resta();
            break;
        case "3":
            hacer_multiplicacion();
            break;
        case "4":
            hacer_division();
            break
    }
}
//! selector end
//! selector2 start
function selector2() {
    const otra_operacion = prompt("para hacer otra operación presione 1. Para terminar presione 0.");
    switch (otra_operacion) {
        case "1":
            selector();
            break;
        case "2":

            break;
        case "0":
            alert("Adiós " + user_name + "!");
            break;
    }
}
//! selector2 end
// Objects
class Operation {
    constructor(name, answer) {
        this.name = name;
        this.answer = answer;
    }
}

class History {
    constructor() {
        this.answers = [];
    }
    add_to_history(answer) {
        this.answers.push(answer);
    }
}
const history = new History();

// simulador start
alert("Esta página no está diseñada para visualización móvil");
let user_name = prompt("Ingrese su nombre");
console.log(user_name);
alert("Bienvenido " + user_name + "!");
selector();
selector2();
// simulador end