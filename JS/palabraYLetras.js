function elegirPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
};

function comprobarLetra(letra, letraAscii) {
    if(letraAscii >= 65 && letraAscii <= 90 && !letras.includes(letra)) {
        letras.push(letra);
        console.log(letra);
        return true;
    }else{
        console.log(letra)
        return false;
    };
};

function añadirLetraIncorrecta() {
    errores -= 1;
    if(errores == 0) {
        mensajeFinal(false)
    }
};

function añadirLetraCorrecta() {
    acertadas += 1;
    if(acertadas == palabraSecreta.length) {
        mensajeFinal(true);
    };
}