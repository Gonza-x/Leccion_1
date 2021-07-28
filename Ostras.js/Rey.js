var numero = prompt("Escribe el numero por el cual quieres multiplicar");
var limite = prompt("Escribe hasta que numero quieres multiplicar.");

document.write("Tabla de multiplicar del numero: " + numero + "<br>")
for(var i = 1; i <= limite; i++){ //i = i + 1
    var resultado = i * parseInt(numero);
    document.write( i + "x" + numero + " = " + resultado + "<br>");
}  