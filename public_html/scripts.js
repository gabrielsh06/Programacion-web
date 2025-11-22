document.addEventListener("DOMContentLoaded", () => { // Asegura que el DOM esté completamente cargado
    // Sugerencias
    const btnSugerencia = document.getElementById("btn-sugerencias"); // Obtener el botón de sugerencias
    if (btnSugerencia) { // Verificar si el botón existe
        btnSugerencia.addEventListener('click', (e) => {
            e.preventDefault();
            const nombre = document.querySelector("#nombre-suge").value.trim() || "";
            const email = document.querySelector("#email-suge").value.trim() || "";
            const sugerencia = document.querySelector("#sugerencia").value.trim() || "";

            console.log("Nombre:", nombre, "Email:", email, "Sugerencia:", sugerencia);

            if (!nombre || !email || !sugerencia) { // Validar campos vacíos
                Swal.fire({
                    icon: "error",
                    title: "Campos incompletos",
                    text: "Por favor completa todos los campos"
                });
                return;
            }
            Swal.fire({ // Muestro el mensaje de éxito
                icon: "success",
                title: "Enviado correctamente",
                text: "Gracias por enviar tus sugerencias"
            });
            document.getElementById("form-sugerencias").reset();
        });
    }

    // Contacto
    const btnContacto = document.getElementById("btn-contac"); // Obtener el botón de contacto
    if (btnContacto) { // Verificar si el botón existe
        btnContacto.addEventListener("click", (e) => {
            e.preventDefault();
            const nombre = document.querySelector("#nombre").value.trim() || "";
            const apellido = document.querySelector("#apellido").value.trim() || "";
            const celular = document.querySelector("#celular").value.trim() || "";
            const correo = document.querySelector("#correo").value.trim() || "";

            console.log("Nombre:", nombre, "Apellido:", apellido, "Celular:", celular, "Correo:", correo);

            if (!nombre || !apellido || !celular || !correo) { // Validar campos vacíos
                Swal.fire({
                    icon: "error",
                    title: "Campos incompletos",
                    text: "Por favor completa todos los campos"
                });
                return;
            }
            Swal.fire({ // Muestro el mensaje de éxito
                icon: "success",
                title: "Enviado correctamente",
                text: "Pronto un asesor se contactará con usted"
            });
            const datos = { nombre, apellido, celular, correo };
            function guardarUsuario(nuevoUsuario) {
                let usuarios = JSON.parse(localStorage.getItem("datosUsuario")) || [];
                usuarios.push(nuevoUsuario);
                localStorage.setItem("datosUsuario", JSON.stringify(usuarios));
            }
            guardarUsuario(datos);
            document.getElementById("form-contacto").reset();
        });
    }

    // Reclamaciones
    const btnReclamo = document.getElementById("btn-reclamaciones"); // Obtener el botón de reclamaciones
    if (btnReclamo) { // Verificar si l botón existe
        btnReclamo.addEventListener("click", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const domicilio = document.getElementById("domicilio").value.trim();
            const nroDocumento = document.querySelector('input[name="nro_documento"]').value.trim();
            const datoContacto = document.querySelector('input[name="dato_contacto"]').value.trim();
            const documentoSeleccionado = document.querySelector('input[name="documento"]:checked');
            const contactoSeleccionado = document.querySelector('input[name="contacto"]:checked');
            const monto = document.getElementById("monto").value.trim();
            const descBien = document.getElementById("desc_bien").value.trim();
            const tipoSeleccionado = document.querySelectorAll('input[name="tipo"]:checked');
            const tipoReclamo = document.querySelector('input[name="tipo_reclamo"]:checked');
            const detalle = document.getElementById("detalle").value.trim();

            if ( // Validación de Reclamaciones
                !nombre ||
                !domicilio ||
                !nroDocumento ||
                !datoContacto ||
                !documentoSeleccionado ||
                !contactoSeleccionado ||
                !monto ||
                !descBien ||
                tipoSeleccionado.length === 0 ||
                !tipoReclamo ||
                !detalle
            ) {
                Swal.fire({
                    icon: "error",
                    title: "Campos obligatorios incompletos",
                    text: "Por favor, complete todos los campos requeridos y seleccione las opciones necesarias."
                });
                return;
            }
            Swal.fire({ // Éxito de Reclamaciones
                icon: "success",
                title: "Reclamación Registrada Correctamente",
                html: "Su reclamo ha sido ingresado en el Libro de Reclamaciones. Recibirá una respuesta a la brevedad.",
                confirmButtonText: "Aceptar"
            });
            document.querySelector("#form-reclamaciones").reset();
        });
    }
});