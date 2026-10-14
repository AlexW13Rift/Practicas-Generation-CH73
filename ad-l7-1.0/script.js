const boton = document.getElementById("elBoton");
const alertaContenedor = document.getElementById("alertaContenedor");

if (boton && alertaContenedor) {

  boton.addEventListener("click", function() {

    alertaContenedor.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">

        Alerta, alguien presionó el botón

        <button type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Cerrar">
        </button>

      </div>
    `;

  });

}


const formulario = document.getElementById("formulario");

if (formulario) {

  formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    formulario.reset();

  });

}