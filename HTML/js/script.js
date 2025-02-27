const selectorClaroOscuro = document.getElementById('selector-claro-oscuro');
const selectorTema = document.getElementById('selector-tema');

selectorClaroOscuro.addEventListener('change', function() {
    actualizaOpcionClaroOscuro(this.value);

    localStorage.setItem("opcion-claro-oscuro", this.value);
});

selectorTema.addEventListener('change', function() {
    actualizaTema(this.value);

    localStorage.setItem("opcion-tema", this.value);
});

function actualizaOpcionClaroOscuro(opcion) {
    selectorClaroOscuro.value = opcion;
    
    document.body.setAttribute('data-bs-theme', opcion);
}

function actualizaTema(tema) {
    selectorTema.value = tema;

    if (tema == "bootstrap") {
        document.getElementById('enlace-tema').href = `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`;
    }
    else {
        document.getElementById('enlace-tema').href = `https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3/${tema}/bootstrap.min.css`;
    }
}

function cargarAjustes() {
    const opcion = localStorage.getItem("opcion-claro-oscuro");
    if (opcion) actualizaOpcionClaroOscuro(opcion);

    const tema = localStorage.getItem("opcion-tema");
    if (tema) actualizaTema(tema);
}

cargarAjustes();