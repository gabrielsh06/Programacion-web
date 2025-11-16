
const formSugerencia = document.querySelector("#form-sugerencias");
const btnSugerencia = document.querySelector("#btn-sugerencias")
btnSugerencia.addEventListener('click', () => {
    formSugerencia.reset();
});

const formContacto = document.querySelector("#form-contacto");
const btnContacto = document.querySelector("#btn-contac");
btnContacto.addEventListener('click', () => {
    formContacto.reset();
});