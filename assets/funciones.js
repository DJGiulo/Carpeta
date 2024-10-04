function saludar (nombre, apellido) {
    console.log ("hola " + nombre)
}

let nombreDelUsuario = prompt ("Pone tu nombre")

function sumarDosNumeros (numero1, numero2) {
    let total = numero1 + numero2
    console.log (total)
}

function saludarAalguien(nombre) {
    return `Hola ${nombre} como estas?`
}

let restarDosNumeros = (X , Y) =>{
    let total = X - Y
    console.log (total)
}

restarDosNumeros (6,8)
sumarDosNumeros(4,7)

saludar(nombreDelUsuario)

const calcularPrecioTotal = (precio, impuesto) => {
    let total = precio + (precio * impuesto);
    return total
}

let precioProducto = calcularPrecioTotal (2000, 0.21)
console.log (`El precio del producto es: $`+ total)

