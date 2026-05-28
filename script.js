// Función para redirigir a otra página
function irA(pagina) {
    window.location.href = pagina;
}

// Validación del formulario de contacto
document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real
    alert("Formulario enviado correctamente ✅");
});

// Función para crear huellitas
function crearHuella(x, y) {
    const huella = document.createElement("div");
    huella.className = "huellita";
    huella.style.left = x + "px";
    huella.style.top = y + "px";
    document.body.appendChild(huella);

    // Eliminar la huellita después de 1.2 segundos
    setTimeout(() => {
        huella.remove();
    }, 1200);
}

// Eventos para mouse en PC
document.addEventListener("mousemove", function(e) {
    crearHuella(e.pageX, e.pageY);
});

// Eventos para pantallas táctiles (celulares/tablets)
document.addEventListener("touchmove", function(e) {
    const touch = e.touches[0];
    crearHuella(touch.pageX, touch.pageY);
});

document.addEventListener("touchstart", function(e) {
    const touch = e.touches[0];
    crearHuella(touch.pageX, touch.pageY);
});

// Activar enlace activo en el menú
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            // Quitar la clase activa de todos los enlaces
            links.forEach(l => l.classList.remove("active"));
            // Agregar la clase activa al enlace presionado
            this.classList.add("active");
        });
    });
});
