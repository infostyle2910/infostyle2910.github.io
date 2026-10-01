// =====================================================
// INFOSTYLE - APP.JS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {


    // =================================================
    // ELEMENTOS
    // =================================================

    const menuBtn = document.getElementById("menuBtn");

    const sidebar = document.getElementById("sidebar");

    const overlay = document.getElementById("overlay");


    // =================================================
    // ABRIR MENU
    // =================================================

    function abrirMenu() {

        sidebar.classList.add("active");

        overlay.classList.add("active");

    }


    // =================================================
    // CERRAR MENU
    // =================================================

    function cerrarMenu() {

        sidebar.classList.remove("active");

        overlay.classList.remove("active");

    }


    // =================================================
    // BOTON navegación
    // =================================================

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            if (sidebar.classList.contains("active")) {

                cerrarMenu();

            } else {

                abrirMenu();

            }

        });

    }


    // =================================================
    // OVERLAY
    // =================================================

    if (overlay) {

        overlay.addEventListener("click", cerrarMenu);

    }


    // =================================================
    // SUBMENUS
    // =================================================

    const botonesSubmenu =
        document.querySelectorAll(".submenu-btn");


    botonesSubmenu.forEach((boton) => {

        boton.addEventListener("click", (e) => {

            e.stopPropagation();


            const submenu =
                boton.querySelector(".submenu");


            if (!submenu) {
                return;
            }


            // Cerrar los demás

            botonesSubmenu.forEach((otroBoton) => {

                if (otroBoton !== boton) {

                    otroBoton.classList.remove("active");


                    const otroSubmenu =
                        otroBoton.querySelector(".submenu");


                    if (otroSubmenu) {

                        otroSubmenu.classList.remove("open");

                    }

                }

            });


            // Abrir / cerrar actual

            boton.classList.toggle("active");

            submenu.classList.toggle("open");

        });

    });


    // =================================================
    // INICIO
    // =================================================

    const inicio =
        document.getElementById("inicio");


    if (inicio) {

        inicio.addEventListener("click", () => {

            cerrarMenu();

            window.location.href = "index.html";

        });

    }


    // =================================================
    // INGRESAR
    // =================================================

    const ingresar =
        document.getElementById("ingresar");


    if (ingresar) {

        ingresar.addEventListener("click", () => {

            window.location.href = "login.html";

        });

    }


    // =================================================
    // ESCAPE
    // =================================================

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            cerrarMenu();

        }

    });

});
