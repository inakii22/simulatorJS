let bandera = true
const frutasVerduras = [ 'Cebollas', 'Tomates', 'Lechugas', 'Paltas' ]
const metodosPago = [ 'Mercado pago', 'Debito', 'Efectivo' ]
let carrito = []
let total = 0 

function sumarAtotal(precio, nombre, cantidad = 1) {
     total += precio * cantidad 

    const palabraCap = nombre[0] .toUpperCase() + nombre.slice(1)
    console.log(palabraCap)

    carrito.push(palabraCap)
}

function sistemaDeCompra(frutasVerduras) {
    let cantidad = 1
    switch(frutasVerduras){
        case 'cebollas':
            cantidad = prompt( ' ¿Cuantas ' + frutasVerduras + ' queres')
            sumarAtotal(300, frutasVerduras, cantidad)
            break
        case 'tomates':
            cantidad = prompt( ' ¿Cuantos ' + frutasVerduras + ' queres')
            sumarAtotal(200, frutasVerduras, cantidad)
            break
        case 'lechugas':
            cantidad = prompt( ' ¿Cuantas ' + frutasVerduras + ' queres')
            sumarAtotal(250, frutasVerduras, cantidad)
            break
        case 'paltas':
            cantidad = prompt( ' ¿Cuantas ' + frutasVerduras + ' queres')
            sumarAtotal(800, frutasVerduras, cantidad)
            break
        default:
            alert('No tenemos.')
            break
    }
    

}
function infoPago(metodosPago){
    if (metodosPago === 'mercado pago') {
        total = total * 1.25
    }
    alert('el total a pagar es de ' + total.toFixed(2))
}

function sistemaDePago(metodosPago) {
    switch(metodosPago){
        case 'mercado pago':
          infoPago(metodosPago)
            break
        case 'debito':
            infoPago(metodosPago)
            break
        case 'efectivo':
            infoPago(metodosPago)
            break
        default:
            alert('No tenemos ese sistema de pago.')
    }
    

}



while(bandera){
    const valorElegido = prompt( '¿Que quiere comprar? \n\n- ' + frutasVerduras.join('\n- ')) .toLowerCase()

    sistemaDeCompra(valorElegido)

    bandera = confirm(' ¿Quiere seguir comprando?')

}

alert( ' El total del pedido es : ' + total)
alert(' Estos son los productos que agrego :\n\n' + carrito.join('\n'))

bandera = true

while(bandera){
    const metodosDePago = prompt( '¿Como desea pagar? \n\n- ' + metodosPago.join('\n- ')) .toLowerCase()

    sistemaDePago(metodosDePago)
    if(bandera){
        bandera = confirm ('¿Cancelar compra?')
    }   
}







































// alert("Su compra fue exitosa")

// let  respuesta = confirm("Desea seguir comprando?")
//console.log(respuesta)

// let pedido = prompt("Que desea comprar?")
// console.log(pedido)

// edad = parseInt(prompt("Cuantos anios tenes?"))
// console.log(edad+30)