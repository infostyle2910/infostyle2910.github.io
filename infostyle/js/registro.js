// =====================================================
// INFOSTYLE
// REGISTRO.JS
// =====================================================


// Obtener elementos del formulario
const registroForm = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");


// =====================================================
// REGISTRAR USUARIO
// =====================================================

registroForm.addEventListener("submit", function (event) {

    // Evitar que la página se recargue
    event.preventDefault();


    // =================================================
    // OBTENER DATOS
    // =================================================

    const usuario = document
        .getElementById("nuevoUsuario")
        .value
        .trim();

    const correo = document
        .getElementById("correo")
        .value
        .trim();

    const telefono = document
        .getElementById("telefono")
        .value
        .trim();

    const profesion = document
        .getElementById("profesion")
        .value;

    const clave = document
        .getElementById("nuevaClave")
        .value;


    // =================================================
    // LIMPIAR MENSAJE
    // =================================================

    mensaje.textContent = "";


    // =================================================
    // VALIDAR CAMPOS
    // =================================================

    if (
        usuario === "" ||
        correo === "" ||
        telefono === "" ||
        profesion === "" ||
        clave === ""
    ) {

        mensaje.style.color = "red";

        mensaje.textContent =
            "Completa todos los campos.";

        return;
    }


    // =================================================
    // OBTENER USUARIOS EXISTENTES
    // =================================================

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    // =================================================
    // COMPROBAR SI EL USUARIO YA EXISTE
    // =================================================

    const usuarioExiste = usuarios.some(
        u =>
            u.usuario.toLowerCase() ===
            usuario.toLowerCase()
    );


    if (usuarioExiste) {

        mensaje.style.color = "red";

        mensaje.textContent =
            "Ese usuario ya existe.";

        return;
    }


    // =================================================
    // COMPROBAR SI EL CORREO YA EXISTE
    // =================================================

    const correoExiste = usuarios.some(
        u =>
            u.correo.toLowerCase() ===
            correo.toLowerCase()
    );


    if (correoExiste) {

        mensaje.style.color = "red";

        mensaje.textContent =
            "Ese correo ya está registrado.";

        return;
    }


    // =================================================
    // CREAR NUEVO USUARIO
    // =================================================

    const nuevoUsuario = {

        usuario: usuario,

        correo: correo,

        telefono: telefono,

        profesion: profesion,

        clave: clave

    };


    // =================================================
    // AGREGAR USUARIO A LA LISTA
    // =================================================

    usuarios.push(nuevoUsuario);


    // =================================================
    // GUARDAR USUARIOS
    // =================================================

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );


    // =================================================
    // GUARDAR TIPO DE PERFIL
    // =================================================

    if (profesion === "Cliente") {

        localStorage.setItem(
            "nuevoCliente",
            JSON.stringify(nuevoUsuario)
        );

    } else {

        localStorage.setItem(
            "nuevoPrestador",
            JSON.stringify(nuevoUsuario)
        );

    }


    // =================================================
    // GUARDAR USUARIO ACTUAL
    // =================================================

    localStorage.setItem(
        "usuarioActual",
        JSON.stringify(nuevoUsuario)
    );


    // =================================================
    // MOSTRAR MENSAJE
    // =================================================

    mensaje.style.color = "green";

    mensaje.textContent =
        "Cuenta creada correctamente.";


    // =================================================
    // IR AL INDEX
    // =================================================

    setTimeout(function () {

        window.location.href = "index.html";

    }, 1000);

});
