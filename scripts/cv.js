function cambiarVisibilidad(idElemAVariarVisibilidad, idBotonAccionador, textoDeBoton){

    const elemAVariar = document.getElementById(idElemAVariarVisibilidad);
    const elemBotonAccionador = document.getElementById(idBotonAccionador);

    if (elemAVariar.style.display == "") {
        elemAVariar.style.display = "none";
        elemBotonAccionador.innerText = "Ver " + textoDeBoton;
    } else {
        elemAVariar.style.display = "";
        elemBotonAccionador.innerText = "Ocultar " + textoDeBoton;
    }

}

const elemBotonContacto = document.getElementById("botonContacto");
elemBotonContacto.addEventListener("click", function (){ cambiarVisibilidad("datosContacto", "botonContacto", "datos de contacto") });

cambiarVisibilidad("datosContacto", "botonContacto", "datos de contacto");
