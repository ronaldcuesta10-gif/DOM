
function saludar() {
    const nombre = document.getElementById("nombre").value;
    alert("Hola " + nombre);
}

function oscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function sumar() {
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);

    const suma = n1 + n2;
    document.getElementById("resultado").value = suma;
}
