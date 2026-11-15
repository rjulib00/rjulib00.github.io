//cogemos los elementos que queremos que vayan a ser "vistos" para ponerles como clase adicional, el activo
const texto = document.getElementById("texto");
const apartados = texto.querySelectorAll("h1");

//console.log("CHIVATO APARTADOS: " + apartados);

//Funcion propia de javascript, es una API que me dice si lo que se "esta viendo en pantalla"
const observador = new IntersectionObserver(queEstoyViendo);

//recorremos todos los apartados que podamos ver, de los elementos que han cambiado (que han dejado de "verse")
function queEstoyViendo(loqueveo) {
    //para cada uno, tenemos que comprobar si esta "activo o no"
    loqueveo.forEach(viendolo);
}

//ponemos activo al elemento que estamos viendo
function viendolo(marcador) {
    if (marcador.isIntersecting) { //si lo estamos viendo, entramos
        const id = marcador.target.id; //obtenemos el id del elemento que estamso viendo
        const enlace = document.querySelector('.marcador a[href="#' + id + '"]'); //cogemos el primer "parte" que coincida con el que estamos viendo
        //console.log("CHIVATO ENLACE: " + enlace);
        quitarActivoElementos(); //llamamos a la funcion quitarActivoElementos, que basicamente quita el activo a todos los elementos
        enlace.parentElement.classList.add("activo"); //a el elemento que estamos viendo, le damos la clase activo
    }
}

//funcion quiitar el "activo"
function quitarActivoElementos() {
    const elementos = document.querySelectorAll(".marcador div"); //cogemos todos los elementos

    elementos.forEach(eliminarActivo);//a cada elemento le quitamos su activo
}

//funcion que le quita el activo a un elemento (en este caso a los div de dentro de inferior, en marcador)
function eliminarActivo(elemento) {
    elemento.classList.remove("activo");
}

//un observados que realiza toda la parafernalia de la api, esta es la funcion que se esta ejecutando de normal, que llama al resto
function loVeoTodo(apartado) {
    observador.observe(apartado);
}

//para cada "update", comprobamos todos los elementos, eliminados el activo de todos y ponemos el actiov al que estamos viendo
apartados.forEach(loVeoTodo);