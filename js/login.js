// =====================================================
// INFOSTYLE
// LOGIN.JS
// =====================================================


// Obtener elementos del formulario
const loginBtn = document.getElementById("loginBtn");
const mensaje = document.getElementById("mensaje");


// =====================================================
// INICIAR SESIÓN
// =====================================================

loginBtn.addEventListener("click", () => {

    const usuario = document
        .getElementById("usuario")
        .value
        .trim();

    const clave = document
        .getElementById("clave")
        .value;


    // Limpiar mensaje anterior
    mensaje.textContent = "";


    // =================================================
    // VALIDAR CAMPOS
    // =================================================

    if (usuario === "" || clave === "") {

        mensaje.style.color = "red";

        mensaje.textContent =
            "Completa todos los campos.";

        return;
    }


    // =================================================
    // OBTENER USUARIOS REGISTRADOS
    // =================================================

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    // =================================================
    // BUSCAR USUARIO
    // =================================================

    const encontrado = usuarios.find(
        u =>
            u.usuario === usuario &&
            u.clave === clave
    );


    // =================================================
    // USUARIO ENCONTRADO
    // =================================================

    if (encontrado) {

        alert("Bienvenido " + encontrado.usuario);


        // Guardar usuario que inició sesión
        localStorage.setItem(
            "usuarioActual",
            JSON.stringify(encontrado)
        );


        // =================================================
        // REDIRECCIÓN SEGÚN TIPO DE USUARIO
        // =================================================

        if (encontrado.profesion === "Cliente") {

            window.location.href = "index.html";

        } else if (
            encontrado.profesion === "Prestador de servicios"
        ) {

            window.location.href = "index.html";

        } else {

            // Por seguridad, si el tipo no existe
            mensaje.style.color = "red";

            mensaje.textContent =
                "Tipo de usuario no válido.";
        }


    } else {

        // =================================================
        // DATOS INCORRECTOS
        // =================================================

        mensaje.style.color = "red";

        mensaje.textContent =
            "Usuario o contraseña incorrectos.";
    }

});
