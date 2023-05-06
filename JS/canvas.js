let canvasWidth = 1400;
let anchuraLinea = 50;
let separacion = 20;

function dibujarCanvas() {
    tablero2d.lineWidth = 8;
    tablero2d.lineCap = "round";
    tablero2d.lineJoin = "round";
    tablero2d.fillStyle = "#f0f8ff";
    tablero2d.strokeStyle = "#0A3871";

    tablero2d.fillRect(0,0,1400,760);
};

function dibujarLinea() {
    let totalAncho = (anchuraLinea + separacion) * palabraSecreta.length - separacion;
    let startingPositionX = ((canvasWidth - totalAncho) / 2);

    tablero2d.lineWidth = 6;
    tablero2d.lineCap = "round";
    tablero2d.lineJoin = "round";
    tablero2d.fillStyle = "#8ad4de";
    tablero2d.strokeStyle = "#0A3871";

    tablero2d.beginPath();

    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero2d.moveTo(startingPositionX + (i * (anchuraLinea + separacion)), 640);
        tablero2d.lineTo(startingPositionX + (i * (anchuraLinea + separacion)) + anchuraLinea, 640);
    }

    tablero2d.stroke();
    tablero2d.closePath();
};

function dibujarAhorcado(errores) {
    tablero2d.lineWidth = 8;
    tablero2d.lineCap = "round";
    tablero2d.lineJoin = "round";
    tablero2d.fillStyle = "#f0f8ff";
    tablero2d.strokeStyle = "#0A3871";

    tablero2d.beginPath();
    switch (errores) {
        case 8:
            // Base
            tablero2d.moveTo(550, 450);
            tablero2d.lineTo(850, 450);
            break;
        case 7:
            // Poste vertical
            tablero2d.moveTo(600, 450);
            tablero2d.lineTo(600, 50);
            break;
        case 6:
            // Poste horizontal
            tablero2d.moveTo(600, 50);
            tablero2d.lineTo(800, 50);
            break;
        case 5:
            // Soporte
            tablero2d.moveTo(800, 50);
            tablero2d.lineTo(800, 100);
            break;
        case 4:
            // Cabeza
            tablero2d.beginPath();
            tablero2d.arc(800, 150, 50, 0, Math.PI * 2);
            tablero2d.closePath();
            break;
        case 3:
            // Cuerpo
            tablero2d.moveTo(800, 200);
            tablero2d.lineTo(800, 350);
            break;
        case 2:
            // Brazos
            tablero2d.moveTo(800, 250);
            tablero2d.lineTo(750, 300);
            tablero2d.moveTo(800, 250);
            tablero2d.lineTo(850, 300);
            break;
        case 1:
            // Piernas
            tablero2d.moveTo(800, 350);
            tablero2d.lineTo(750, 400);
            tablero2d.moveTo(800, 350);
            tablero2d.lineTo(850, 400);
            break;
    }
    tablero2d.stroke();
    tablero2d.closePath();
};

function escribirLetraCorrecta(index) {
    let totalAncho = (anchuraLinea + separacion) * palabraSecreta.length - separacion;
    let startingPositionX = ((canvasWidth - totalAncho) / 2);

    tablero2d.font = 'normal 52px Inter';
    tablero2d.lineWidth = 6;
    tablero2d.lineCap = "round";
    tablero2d.lineJoin = "round";
    tablero2d.fillStyle = "#0A3871";

    tablero2d.fillText(palabraSecreta[index], startingPositionX + (index * (anchuraLinea + separacion)), 630);
    tablero2d.stroke();
};

function escribirLetraIncorrecta(letra,errores) {
    tablero2d.font = 'normal 40px Inter';
    tablero2d.lineWidth = 6;
    tablero2d.lineCap = "round";
    tablero2d.lineJoin = "round";
    tablero2d.fillStyle = "#0A3871";
    tablero2d.fillText(letra, 435+(40*(10-errores)), 700, 40);
    tablero2d.stroke();
};