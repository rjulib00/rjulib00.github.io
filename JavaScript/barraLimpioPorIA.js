const texto = document.getElementById("texto");
const apartados = texto.querySelectorAll("h1");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const id = entrada.target.id;
            const enlace = document.querySelector(`.marcador a[href="#${id}"]`);

            document.querySelectorAll(".marcador div").forEach(div => {
                div.classList.remove("activo");
            });

            enlace.parentElement.classList.add("activo");
        }
    });
});

apartados.forEach(apartado => {
    observador.observe(apartado);
});