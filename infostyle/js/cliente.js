document.getElementById("guardarCliente").onclick=()=>{

    const datos=JSON.parse(localStorage.getItem("nuevoCliente"));

    const tipoDocumento=document.getElementById("tipoDocumento").value;
    const numeroDocumento=document.getElementById("numeroDocumento").value;
    const direccion=document.getElementById("direccion").value;
    const codigoPostal=document.getElementById("codigoPostal").value;

    if(
        tipoDocumento===""||
        numeroDocumento===""||
        direccion===""||
        codigoPostal===""){

        alert("Complete todos los campos.");
        return;

    }

    const usuarios=JSON.parse(localStorage.getItem("usuarios"))||[];

    usuarios.push({

        usuario:datos.usuario,
        correo:datos.correo,
        telefono:datos.telefono,
        profesion:datos.profesion,
        clave:datos.clave,

        tipoDocumento,
        numeroDocumento,
        direccion,
        codigoPostal

    });

    localStorage.setItem("usuarios",JSON.stringify(usuarios));

    localStorage.removeItem("nuevoCliente");

    alert("Registro completado.");

    window.location.href="login.html";

}