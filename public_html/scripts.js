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
            const datos = {nombre, apellido, celular, correo};
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
            const nombre = document.querySelector("#nombre").value.trim() || "";
            const domicilio = document.querySelector("#domicilio").value.trim() || "";
            const monto = document.querySelector("#monto").value.trim() || "";
            const detalle = document.querySelector("#detalle").value.trim() || "";

            console.log("Nombre:", nombre, "Domicilio:", domicilio, "Monto", monto, "Detalle", detalle);
            
            if(!nombre || !domicilio || !monto || !detalle) { // Validar campos vacíos
                Swal.fire({
                    icon: "error",
                    title: "Campos incompletos",
                    text: "Por favor completa todos los campos"
                });
                return;
            }
            Swal.fire({ // Muestro el mensaje de éxito
                icon: "success",
                title: "Reclamo enviado correctamente",
                text: "Lamentamos los inconvenientes, pronto solucionaremos su problema"
            });
            document.querySelector("#form-reclamaciones").reset();
        });
    }
});