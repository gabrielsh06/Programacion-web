const formSugerencia = document.querySelector("#form-sugerencias"); // Selecciona el formulario de sugerencias
const btnSugerencia = document.querySelector("#btn-sugerencias") // Selecciona el botón de enviar sugerencias
btnSugerencia.addEventListener('click', () => {
    formSugerencia.reset(); // Reinicia el formulario al hacer clic en el botón
});