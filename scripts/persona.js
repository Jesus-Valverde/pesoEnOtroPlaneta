// Selecciona el formulario y agrega un evento de escucha para el evento 'submit'
document.getElementById('formulario').addEventListener('submit', function(event) {
    // Previene el comportamiento predeterminado del formulario (recargar la página)
    event.preventDefault();

    // Llama a la función 'guardarDatos'
    guardarDatos();

    // Redirige a la página de resultados
    window.location.href = '/resultados.html';
});

// Función para guardar los datos en el almacenamiento local (localStorage)
function guardarDatos() {
    // Obtiene los valores del formulario y los asigna a variables
    let nombre = document.getElementById('nombre').value.toUpperCase();
    let edad = parseInt(document.getElementById('edad').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    // Crea un objeto 'datosPersona' con los valores obtenidos
    let datosPersona = {
        nombre: nombre,
        edad: edad,
        altura: altura,
        peso: peso,
        IMC: 0.0
    };

    // Almacena los datos en localStorage después de convertirlos a formato JSON
    localStorage.setItem('datosPersona', JSON.stringify(datosPersona));
}
