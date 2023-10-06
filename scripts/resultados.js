// Obtener los datos guardados en localStorage
let datosPersona = JSON.parse(localStorage.getItem("datosPersona"));
// Calcula el IMC y lo almacena en los datosPersona
datosPersona.IMC = parseFloat(calcularIMC(datosPersona.peso, datosPersona.altura).toFixed(2));

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    altura = altura / 100;
    return peso / (altura * altura);
}

// Array de objetos que representan diferentes planetas con sus respectivas gravedades
let planetas = [
    { nombre: "Tierra", gravedad: 9.81 },
    { nombre: "Luna", gravedad: 1.62 },
    { nombre: "Mercurio", gravedad: 3.7 },
    { nombre: "Venus", gravedad: 8.87 },
    { nombre: "Jupiter", gravedad: 24.79 },
    { nombre: "Saturno", gravedad: 10.44 }
];

// Para cada planeta, calcula el peso y el IMC correspondientes, y clasifica el IMC
let datosPlanetas = planetas.map(planeta => {
    let pesoEnPlaneta = datosPersona.peso * (planeta.gravedad / 9.81);
    let imcEnPlaneta = calcularIMC(pesoEnPlaneta, datosPersona.altura);
    let clasificacionIMC = clasificarIMC(imcEnPlaneta);

    return {
        planeta: planeta.nombre,
        pesoEnPlaneta: pesoEnPlaneta.toFixed(2),
        gravedadEnPlaneta: planeta.gravedad,
        clasificacionIMC: clasificacionIMC
    };
});

// Función para clasificar el IMC
function clasificarIMC(IMC) {
    let resultado;

    if (IMC < 0) {
        resultado = "Valor de IMC inválido";
    } else if (IMC <= 18.4) {
        resultado = "Bajo peso";
    } else if (IMC <= 24.9) {
        resultado = "Peso normal";
    } else if (IMC <= 29.9) {
        resultado = "Sobrepeso";
    } else if (IMC <= 34.9) {
        resultado = "Obesidad grado 1";
    } else if (IMC <= 39.9) {
        resultado = "Obesidad grado 2";
    } else {
        resultado = "Obesidad grado 3";
    }

    return resultado;
}

// Función para actualizar los datos de los planetas en el documento HTML
function actualizarDatosPlanetas() {
    for (let i = 0; i < datosPlanetas.length; i++) {
        let planetaActual = datosPlanetas[i];

        document.getElementById(`planeta${planetaActual.planeta}`).textContent = planetaActual.planeta;
        document.getElementById(`pesoEnPlaneta${planetaActual.planeta}`).textContent = planetaActual.pesoEnPlaneta;
        document.getElementById(`gravedadEnPlaneta${planetaActual.planeta}`).textContent = planetaActual.gravedadEnPlaneta;
        document.getElementById(`clasificacionIMCEn${planetaActual.planeta}`).textContent = planetaActual.clasificacionIMC;
    }
}

// Función para actualizar los datos de la persona en el documento HTML
function actualizarDatosPersona() {
    document.getElementById('nombre').textContent = datosPersona.nombre;
    document.getElementById('edad').textContent = datosPersona.edad;
    document.getElementById('altura').textContent = datosPersona.altura;
    document.getElementById('peso').textContent = datosPersona.peso;
    document.getElementById('IMC').textContent = datosPersona.IMC;
}

// Llamadas a las funciones de actualización
actualizarDatosPlanetas();
actualizarDatosPersona();

// Imprime los datos en la consola para propósitos de depuración
console.log(datosPersona);
console.log(datosPlanetas);
