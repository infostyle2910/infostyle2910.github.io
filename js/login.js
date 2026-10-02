<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Iniciar Sesión - InfoStyle</title>

    <link rel="stylesheet" href="css/style.css">

    <style>
        body {
            background: #f4f4f4;
        }

        .login {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .login-box {
            width: 360px;
            background: white;
            padding: 35px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, .15);
        }

        .login-box h2 {
            text-align: center;
            margin-bottom: 25px;
            color: #32485A;
        }

        .login-box input {
            width: 100%;
            padding: 12px;
            margin-bottom: 18px;
            border: 1px solid #ccc;
            outline: none;
            border-radius: 4px;
        }

        .login-box input:focus {
            border-color: #32485A;
        }

        .login-box button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 4px;
            background: #32485A;
            color: white;
            font-size: 18px;
            cursor: pointer;
        }

        .login-box button:hover {
            background: #283a48;
        }

        .registro-link {
            text-align: center;
            margin-top: 20px;
            color: #66727b;
            font-size: 14px;
        }

        .registro-link a {
            color: #32485A;
            font-weight: bold;
            text-decoration: none;
        }

        .registro-link a:hover {
            text-decoration: underline;
        }

        .mensaje {
            margin-top: 15px;
            text-align: center;
            color: red;
        }

        body::before {
            content: "";

            position: fixed;

            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            background-image: url("img/logo.png");

            background-repeat: repeat;
            background-size: 120px;

            opacity: 0.06;

            pointer-events: none;

            z-index: -1;
        }
    </style>
</head>

<body>

<div class="login">

    <div class="login-box">

        <h2>Iniciar Sesión</h2>

        <input
            type="text"
            id="usuario"
            placeholder="Usuario"
        >

        <input
            type="password"
            id="clave"
            placeholder="Contraseña"
        >

        <button id="loginBtn">
            Ingresar
        </button>

        <p class="registro-link">
            ¿No tienes una cuenta?
            <a href="registro.html">Regístrate</a>
        </p>

        <p class="mensaje" id="mensaje"></p>

    </div>

</div>

<script>
    const usuario = "admin";
    const contraseña = "1234";

    document.getElementById("loginBtn").onclick = () => {

        const user = document.getElementById("usuario").value;
        const pass = document.getElementById("clave").value;

        if (user === usuario && pass === contraseña) {

            alert("Bienvenido a InfoStyle");

            window.location.href = "index.html";

        } else {

            document.getElementById("mensaje").textContent =
                "Usuario o contraseña incorrectos";
        }
    };
</script>

<script src="js/login.js"></script>

</body>
</html>
