
// variables:

let iva = 12
let envio = 1000
let precioTazaTortuga = 500
let precioTazaSalamandra = 400
let precioTazaSapo = 1000
let precioTeteraVerde = 900
let precioTeteraVioleta = 800
let precioPlatoAmarillo = 300
let precioPlatoMarron = 200
let precioPlatoCeleste = 400

// funciones:

//para saber si es necesario repetir el prompt
function repeat(Selec, numeroOpciones){
    return (IsNumberNotValid(Selec) || Selec > numeroOpciones || Selec <= 0)
}
//para saber si el numero es valido
function IsNumberNotValid(a){1
    return isNaN(parseInt(a))
}
//pedir un numero valido
function askValidNumber(){
    alert("Por favor seleccione un número valido")
}
//Whiles utilizados para repetir los prompt en caso de NaN o que sea un numero fuera de los esperados
function DoRepeat1(){
    let seleccionUsuario = seleccion1()
    while(repeat(seleccionUsuario, 4)){
        askValidNumber()
        seleccionUsuario = seleccion1()
    }
    return seleccionUsuario
}
function DoRepeat2_Tazas(){
    let seleccionUsuario = seleccion2_Tazas()
    while(repeat(seleccionUsuario, 4)){
        askValidNumber()
        seleccionUsuario = seleccion2_Tazas()
    }
    return seleccionUsuario
}
function DoRepeat2_Teteras(){
    let seleccionUsuario = seleccion2_Teteras()
    while(repeat(seleccionUsuario, 3)){
        askValidNumber()
        seleccionUsuario = seleccion2_Teteras()
    }
    return seleccionUsuario
}
function DoRepeat2_Platos(){
    let seleccionUsuario = seleccion2_Platos()
    while(repeat(seleccionUsuario, 4)){
        askValidNumber()
        seleccionUsuario = seleccion2_Platos()
    }
    return seleccionUsuario
}
function DoRepeatUnidades(){
    let seleccionUsuario = CuantasUnidades()
    while(repeat(seleccionUsuario, 100)){
        askValidNumber()
        seleccionUsuario = CuantasUnidades()
    }
    return seleccionUsuario
}
function DoRepeatConfirmacion(a, b, c, d, e){
    let seleccionUsuario = ConfirmarCompra(a, b, c, d, e)
    while(repeat(seleccionUsuario, 2)){
        askValidNumber()
        seleccionUsuario = ConfirmarCompra(a, b, c, d, e)
    }
    return seleccionUsuario
}
//Switches para los menus
function Menu1(){
    switch(parseInt(DoRepeat1())){
        case 1:
            Menu2_Tazas()
        break
        case 2:
            Menu2_Teteras()
        break
        case 3:
            Menu2_Platos()
        break
        default:
            alert("Gracias por usar Vajillas.com")
        break
    }
}
function Menu2_Tazas(){
    switch(parseInt(DoRepeat2_Tazas())){
        case 1:
            PresupuestoFinal(precioTazaTortuga)
        break
        case 2:
            PresupuestoFinal(precioTazaSalamandra)
        break
        case 3:
            PresupuestoFinal(precioTazaSapo)
        break
        default:
            Menu1()
        break
    }
}
function Menu2_Teteras(){
    switch(parseInt(DoRepeat2_Teteras())){
        case 1:
            PresupuestoFinal(precioTeteraVerde)
        break
        case 2:
            PresupuestoFinal(precioTeteraVioleta)
        break
        default:
            Menu1()
        break
    }
}
function Menu2_Platos(){
    switch(parseInt(DoRepeat2_Platos())){
        case 1:
            PresupuestoFinal(precioPlatoAmarillo)
        break
        case 2:
            PresupuestoFinal(precioPlatoMarron)
        break
        case 3:
            PresupuestoFinal(precioPlatoCeleste)
        break
        default:
            Menu1()
        break
    }
}
//prompts
function seleccion1(){
    return prompt(
        "Bienvenido a la interfaz de usuario de Vajillas.com"+
      "\n"+
      "\nPor favor seleccione uno de los siguientes articulos a la venta escribiendo el numero correspondiente"+
      "\n 1) Tazas"+
      "\n 2) Teteras"+
      "\n 3) Platos"+
      "\n 4) Salir del Menu"
)
}
function seleccion2_Tazas(){
    return prompt(
        "Por favor seleccione uno de nuestros modelos de tazas:"+   
        "\n1) azul con dibujo de una tortuga celeste - "+precioTazaTortuga+"$"+
        "\n2) rojo con dibujo de una salamandra con fuego en la cola - "+precioTazaSalamandra+"$"+
        "\n3) verde con dibujo de un sapo con una flor en la espalda - "+precioTazaSapo+"$"+
        "\n4) menú anterior"
    )
}
function seleccion2_Teteras(){
    return prompt(
        "Por favor seleccione uno de nuestros modelos de teteras:"+
        "\n1) Grande verde - "+precioTeteraVerde+"$"+
        "\n2) Violeta mediana - "+precioTeteraVioleta+"$"+
        "\n3) menú anterior"
    )
}
function seleccion2_Platos(){
    return prompt(
        "Por favor seleccione uno de nuestros modelos de platos:"+
        "\n1) Amarillo con rayas - "+precioPlatoAmarillo+"$"+
        "\n2) Marron con circulos - "+precioPlatoMarron+"$"+
        "\n3) Celeste con ondas - "+precioPlatoCeleste+"$"+
        "\n4) menú anterior"
    )
}

//Presupuesto final
function CuantasUnidades(){
    return prompt("Cuantas Unidades desea comprar?\n(sin importar la cantidad, el precio del envio no se verá afectado, puede comprar hasta un máximo de 100 unidades)")
}
function PresupuestoFinal(precio){
    let precioUnidad = precio
    let unidades = DoRepeatUnidades()
    let precioSinImpuestos = unidades * precio
    let precioConImpuestos = precioSinImpuestos + (precioSinImpuestos * iva)/100
    let precioFinal = precioConImpuestos + envio
    
    if(DoRepeatConfirmacion(precioSinImpuestos, precioConImpuestos, precioFinal, unidades, precioUnidad)==1){
        alert("Gracias por comprar en Vajillas.com!"+
        "\n(su compra será enviada a su domicilio dentro de los proximos 5 dias habiles)")
    }
    else{
        Menu1()
    }
}
function ConfirmarCompra(Psi, Pci, Pf, unidades, precioUnidad){
    return prompt("El precio de la compra es de: ("+precioUnidad+"$ x "+unidades+")"+" "+Psi+"$"+
            "\n Agregando el impuesto IVA ("+iva+"%): "+Pci+"$"+
            "\n Y finalmente agregando el precio del envio ("+envio+"$): "+Pf+"$"+
            "\n Si desea confirmar la compra, escriba \"1\""+
            "\n para volver al menu principal, escriba \"2\"")
}

// Ejecutar menu :D
Menu1()