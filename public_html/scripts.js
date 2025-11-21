document.addEventListener("DOMContentLoaded", () => {
    // Sugerencias
    const btnSugerencia = document.getElementById("btn-sugerencias");
    if (btnSugerencia) {
        btnSugerencia.addEventListener('click', (e) => {
            e.preventDefault();
            const nombre = document.querySelector("#nombre-suge")?.value?.trim() || "";
            const email = document.querySelector("#email-suge")?.value?.trim() || "";
            const sugerencia = document.querySelector("#sugerencia")?.value?.trim() || "";

            console.log("Nombre:", nombre, "Email:", email, "Sugerencia:", sugerencia);

            if (!nombre || !email || !sugerencia) {
                Swal.fire({
                    icon: "error",
                    title: "Campos incompletos",
                    text: "Por favor completa todos los campos"
                });
                return;
            }
            Swal.fire({
                icon: "success",
                title: "Enviado correctamente",
                text: "Gracias por enviar tus sugerencias"
            });
            document.getElementById("form-sugerencias").reset();
        });
    }

    // Contacto
    const btnContacto = document.getElementById("btn-contac");
    if (btnContacto) {
        btnContacto.addEventListener("click", (e) => {
            e.preventDefault();
            const nombre = document.querySelector("#nombre")?.value?.trim() || "";
            const apellido = document.querySelector("#apellido")?.value?.trim() || "";
            const celular = document.querySelector("#celular")?.value?.trim() || "";
            const correo = document.querySelector("#correo")?.value?.trim() || "";

            console.log("Nombre:", nombre, "Apellido:", apellido, "Celular:", celular, "Correo:", correo);

            if (!nombre || !apellido || !celular || !correo) {
                Swal.fire({
                    icon: "error",
                    title: "Campos incompletos",
                    text: "Por favor completa todos los campos"
                });
                return;
            }
            Swal.fire({
                icon: "success",
                title: "Enviado correctamente",
                text: "Pronto un asesor se contactará con usted"
            });
            document.getElementById("form-contacto").reset();
        });
    }
});