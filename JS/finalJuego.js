let resultado = document.getElementById("titulo-final");
let subtitulo = document.getElementById("subtitulo-final");

function mensajeFinal(valor) {
    let final = document.getElementById("container-final");
    tablero2d.clearRect(0,0,1400,760);
    
    if(valor) {
        resultado.textContent = "¡Ganaste!";
        subtitulo.textContent = `Correcto, la palabra era ${palabraSecreta}. ¡Gracias por jugar!`;
    }else{
        resultado.textContent = "Fallaste...";
        subtitulo.textContent = `La palabra era ${palabraSecreta}, pero estuviste cerca. ¡Gracias por jugar!`;
    }
    final.style.display = "flex";
    document.onkeyup = null;
}