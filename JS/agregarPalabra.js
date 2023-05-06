agregarPalabra.addEventListener("click", () => {
    document.getElementById("container-inicio").style.display = "none";
    document.getElementById("container-agregar").style.display = "flex";

    const aceptar = document.getElementById("botonAceptar");
    const regresar = document.getElementById("botonRegresar");
    
    aceptar.addEventListener("click", () => {
        let input = document.getElementById("nuevaPalabra");
        let nuevaPalabra = input.value.toUpperCase();
        palabraSecreta = nuevaPalabra;
        document.getElementById("container-agregar").style.display = "none";        
        
        jugar();
    });
    
    regresar.addEventListener("click", () => {
        document.getElementById("container-agregar").style.display = "none";        
        document.getElementById("container-inicio").style.display = "flex";                
    });
});