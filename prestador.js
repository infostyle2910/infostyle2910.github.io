```javascript
document.getElementById("guardarPrestador").onclick = ()=>{

    const datosBasicos = JSON.parse(localStorage.getItem("nuevoPrestador"));

    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const profesionServicio = document.getElementById("profesionServicio").value;
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const numeroDocumento = document.getElementById("numeroDocumento").value;
    const direccion = document.getElementById("direccion").value;
    const codigoPostal = document.getElementById("codigoPostal").value;

    if(
        nombreCompleto==="" ||
        profesionServicio==="" ||
        tipoDocumento==="" ||
        numeroDocumento==="" ||
        direccion==="" ||
        codigoPostal===""
    ){

        alert("Complete todos los campos.");
        return;

    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({

        usuario:datosBasicos.usuario,
        correo:datosBasicos.correo,
        telefono:datosBasicos.telefono,
        profesion:datosBasicos.profesion,
        clave:datosBasicos.clave,

        nombreCompleto,
        profesionServicio,
        tipoDocumento,
        numeroDocumento,
        direccion,
        codigoPostal

    });

    localStorage.setItem("usuarios",JSON.stringify(usuarios));

    localStorage.removeItem("nuevoPrestador");

    alert("Registro completado correctamente.");

    window.location.href="login.html";

}
```
