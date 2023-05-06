let palabras = ["JAVASCRIPT", "HTML", "CSS", "JAVA", "PYTHON", "ALURA", "ORACLE"]; 
let tablero2d = document.getElementById("pizarra").getContext("2d");
let palabraSecreta = "";
let errores = 8;
let acertadas = 0;
let letras = [];

const iniciarJuego = document.getElementById("botonJugar");
const agregarPalabra = document.getElementById("botonAgregar");
const reiniciarJuego = document.getElementById("botonReiniciar");

iniciarJuego.addEventListener("click", () => {
    document.getElementById("container-inicio").style.display = "none";

    elegirPalabraSecreta();
    jugar();
});

function jugar() {
    dibujarCanvas();
    dibujarLinea();

    document.onkeyup = (e) => {
        let letra = e.key.toUpperCase();
        let letraAscii = letra.charCodeAt(0)
        
        if(comprobarLetra(letra, letraAscii)) {
            if(palabraSecreta.includes(letra)) {
                for(let i=0 ; i < palabraSecreta.length; i++){
                    if(palabraSecreta[i] === letra) {
                        escribirLetraCorrecta(i);
                        añadirLetraCorrecta();
                        console.log(letras);
                    }
                }; 
            }else{
                dibujarAhorcado(errores);
                escribirLetraIncorrecta(letra, errores);
                añadirLetraIncorrecta();
                console.log(letras);
            };
        };
    };
};