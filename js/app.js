h1 = document.createElement('h1')
h1.innerHTML = "Ejercicio 1 Arreglos"
document.body.appendChild(h1)


/* ---------------------------Ejercicio 1------------------------ */
/* defino logitud de hasta 10 de un arreglo aleatorio */

let longitudArreglo = Math.trunc(Math.random() * 10)
let arreglo = new Array(longitudArreglo)

/* llenado arreglo con valores aleatorios */

for (let i = 0; i < longitudArreglo; i++) {
    arreglo[i] = Math.trunc(Math.random() * 10)
}
let arregloOrdenado = arreglo

/* ordenar arreglo con for */

for (let i = 0; i < longitudArreglo; i++) {

    if (arregloOrdenado[i] > arregloOrdenado[i + 1]) {
        temp = arregloOrdenado[i]
        arregloOrdenado[i] = arregloOrdenado[i + 1]
        arregloOrdenado[i + 1] = temp
    }
}

/* ordenar arreglo con metodo sort() */

let arregloOrdenado2 = arreglo.sort()
/* Mostrar arreglo ordenado en pantalla como lista desordenada */
let ol = document.createElement('ol')
for (let i = 0; i < longitudArreglo; i++) {
    let li = document.createElement('li')
    li.textContent = arregloOrdenado[i]
    document.body.appendChild(li)
}


/* ---------------------------Ejercicio 2------------------------ */

/*2a. iterar arreglo con while */

let numeros = [1, 2, 3, 4, 5, 6]
let i = 0;
h1 = document.createElement('h1')
h1.innerHTML = "2.a.Ejercicio Arreglo con while"
document.body.appendChild(h1)
while (i < numeros.length) {

    h2 = document.createElement('h2')
    h2.innerHTML = numeros[i]
    document.body.appendChild(h2)
    i++
}
/*2.b. iterar arreglo con for */

h1 = document.createElement('h1')
h1.innerHTML = "2.b. Ejercicio Arreglo con for"
document.body.appendChild(h1)

for (i = 0; i < numeros.length; i++) {

    h2 = document.createElement('h2')
    h2.innerHTML = numeros[i]
    document.body.appendChild(h2)
}

/*2.c. iterar arreglo con forEach */

h1 = document.createElement('h1')
h1.innerHTML = "2.c. Ejercicio Arreglo con forEach"
document.body.appendChild(h1)

numeros.forEach(iten => {
    h2 = document.createElement('h2')
    h2.innerHTML = iten
    document.body.appendChild(h2)
})

/*2.d. Mostrar arreglo sumandole 1*/

h1 = document.createElement('h1')
h1.innerHTML = "2.d.Ejercicio Mostrar Arreglo sumandole 1"
document.body.appendChild(h1)

numeros.forEach(iten => {
    h2 = document.createElement('h2')
    h2.innerHTML = iten + 1
    document.body.appendChild(h2)
})

/*2.e. Genero una copia del arreglo */

let numerosCopia = numeros.map((item) => item + 1)

/*2.e. Calcular promedio */
let suma = 0
numeros.forEach(item => {
    suma += item
})
console.log("2.e. Calcular promedio")
console.log(suma / numeros.length)

/* ---------------------------Ejercicio 3------------------------ */

h1 = document.createElement('h1')
h1.innerHTML = "3.Ejercicio Numeros elevado al cuadrado"
document.body.appendChild(h1)

numeros.forEach(item => {
    h2 = document.createElement('h2')
    h2.innerHTML = item * item
    document.body.appendChild(h2)
})


/* ---------------------------Ejercicio 4------------------------ */

h1 = document.createElement('h1')
h1.innerHTML = "4. Ejercicio arreglo suma de Numeros mayores 0"
document.body.appendChild(h1)
arregloEj4 = [1, -4, 12, 0, -3, 29, -150]
let sumaNumeros = 0
arregloEj4.forEach(item => {

    if (item > 0) {
        sumaNumeros += item
    }

})
h2 = document.createElement('h2')
h2.innerHTML = sumaNumeros
document.body.appendChild(h2)

/* ---------------------------Ejercicio 5------------------------ */
/*5.a. Nombres con menos de 6 letras */
h1 = document.createElement('h1')
h1.innerHTML = "5.a. Ejercicio  nombres con menos de 6 letras"
document.body.appendChild(h1)
let arregloNombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]

arregloNombres.forEach((item) => {
    if (item.length < 6) {
        h2 = document.createElement('h2')
        h2.innerHTML = item
        document.body.appendChild(h2)
    }

})


/*5.b. Nombres que comienzan con M */

h1 = document.createElement('h1')
h1.innerHTML = "5.b.Ejercicio nombres que comienzan con M"
document.body.appendChild(h1)

arregloNombres.forEach((item) => {
    if (item[0] === "M") {
        h2 = document.createElement('h2')
        h2.innerHTML = item
        document.body.appendChild(h2)
    }

})

/*5.c. Ordenar nombres alfabeticamente*/

h1 = document.createElement('h1')
h1.innerHTML = "5.c.Ejercicio ordenar nombres alfabeticamente"
document.body.appendChild(h1)

let arregloNombresOrdenada = [...arregloNombres]
arregloNombresOrdenada.sort()
console.log("5.c. Ejercicio rdenar nombres alfabeticamente")
arregloNombresOrdenada.forEach(item => {

    h2 = document.createElement('h2')
    h2.innerHTML = item
    document.body.appendChild(h2)
})
console.log(arregloNombresOrdenada)


/* 5.d. generar arreglo con letras Iniciales  */
let arregloIniciales
arregloIniciales = arregloNombres.map(item => item[0])
console.log("5.d. Ejercicio nuevo arreglo con letras Iniciales")
console.log(arregloIniciales)

/* 5.f. generar arreglo nombres mayusculas  */

h1 = document.createElement('h1')
h1.innerHTML = "5.f. Ejercicio generar arreglo nombres mayuscula"
document.body.appendChild(h1)


let arregloNombresMayusculas
console.log("5.f. Ordenar nombres alfabeticamente")
arregloNombresMayusculas = arregloNombres.map(item => item.toUpperCase())
console.log(arregloNombresMayusculas)
arregloNombresMayusculas.forEach(item => {
    h2 = document.createElement('h2')
    h2.innerHTML = item
    document.body.appendChild(h2)
})


/* 5.g. si comienzan con j  */

h1 = document.createElement('h1')
h1.innerHTML = "5.g. Ejercicio si comienzan con J"
document.body.appendChild(h1)
console.log("5.g. Ejercicio si comienzan con J")
let exite = false
arregloNombres.forEach(item => {

    if (item[0] === "J") {
        exite = true
        h2 = document.createElement('h2')
        console.log("Si existe una palabra que comienza con J")
        h2.innerHTML = "Si existe una palabra que comienza con J"
        document.body.appendChild(h2)
    }

}
)
if (!exite) {
    h2 = document.createElement('h2')
    console.log("No existe una palabra que comienza con J")
    h2.innerHTML = "No existe una palabra que comienza con J"
    document.body.appendChild(h2)
}

/* ---------------------------Ejercicio 6------------------------ */

/* 
let arregloColores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
console.log("6. Ejercicio si Exite el color")
h1 = document.createElement('h1')
h1.innerHTML = "6. Ejercicio si Exite el color"
document.body.appendChild(h1)
let color = prompt("Ingrese Color")
let colorExite = false
arregloColores.forEach(item => {
    if (item === color) {
        colorExite = true
        h2 = document.createElement('h2')
        console.log("El color Exite")
        h2.innerHTML = "El color Exite"
        document.body.appendChild(h2)
    }
})
if (!colorExite) {
    h2 = document.createElement('h2')
    console.log("No existe el color Exite")
    h2.innerHTML = "No existe el color Exite"
    document.body.appendChild(h2)
} */

/* ---------------------------Ejercicio 7------------------------ */
console.log("7. Generar Arreglo pares")
let arreglosNumeros2 = [2, 3, 5, 8, 7, 5, 9, 0, 4]
let arregloNumeros2Pares = []
arreglosNumeros2.forEach(item => {
    if ((item % 2) === 0) {
        arregloNumeros2Pares.push(item)
    }

})
console.log(arregloNumeros2Pares)

/* ---------------------------Ejercicio 8------------------------ */
console.log("8. Generar Arreglo con la incial en vocal")
let arreglosPalabras = ["Emanuel", "Hugo", "Jesus", "Patricia", "Veronica", "Flavia", "Omar"]
let arregloPalabrasVocales = []
arreglosPalabras.forEach(item => {
    if (item[0] === "A" || item[0] === "E" || item[0] === "I" || item[0] === "O" || item[0] === "U") {
        arregloPalabrasVocales.push(item)
    }

})
console.log(arregloPalabrasVocales)

/* ---------------------------Ejercicio 9------------------------ */
console.log("9. Generar Arreglo intercambiar posiciones")
let arregloIntercambiar = ["Emanuel", "Omar"]
let aux
intercambiar = (arregloIntercambiar) => {
    aux = arregloIntercambiar[0]
    arregloIntercambiar[0] = arregloIntercambiar[1]
    arregloIntercambiar[1] = aux
    console.log(arregloIntercambiar)
}

intercambiar(arregloIntercambiar)

/* ---------------------------Ejercicio 10------------------------ */

$('#parrafo1').click(() => {
    console.log('Parrafo 1')
})

/* ---------------------------Ejercicio 11------------------------ */
$('#tabla-1').click(() => {
    // document.querySelector('#tabla-1').style.background='red' otra forma
    $('#tabla-1').css({ "background-color": "red" })
})


/* ---------------------------Ejercicio 12------------------------ */
$('#elemento-4').click(() => {
    $('#elemento-4').hide()
})


/* ---------------------------Ejercicio 13------------------------ */
$('#t1-fila-1').click(() => {
    $('#t1-fila-1').css({ "background-color": "blue" })
})
$('#t1-fila-2').click(() => {
    $('#t1-fila-2').css({ "background-color": "red" })
})
$('#t1-fila-3').click(() => {
    $('#t1-fila-3').css({ "background-color": "green" })
})


/* ---------------------------Ejercicio 14------------------------ */

$('.noticia1').click(() => {
    $('.descripcionNoticia1').css("font-size", "30px")
})
$('.noticia2').click(() => {
    $('.descripcionNoticia2').css("font-size", "30px")
})
$('.noticia3').click(() => {
    $('.descripcionNoticia3').css("font-size", "30px")
})

/* ---------------------------Ejercicio 15------------------------ */
$(".cambiar-valores").click(() => {
    $('#valor-t3-fila-1').text("-")
    $('#valor-t3-fila-2').text("-")
    $('#valor-t3-fila-3').text("-")

})
/* ---------------------------Ejercicio 16------------------------ */


$("#btnHipervinculo-1").click(() => {
    $("a").attr("href", "https://www.yahoo.com")

})
$("#btnHipervinculo-2").click(() => {
    $("a").attr("href", "https://www.google.com")
})

$("#btnHipervinculo-3").click(() => {
    $("a").attr("href", "https://www.lanacion.com")
})
/* ---------------------------Ejercicio 17------------------------ */

$("#strong-1").click(() => {
    $("#strong-1").hide()
})
$("#strong-2").click(() => {
    $("#strong-2").hide()
})
$("#strong-3").click(() => {
    $("#strong-3").hide()
})

/* ---------------------------Ejercicio 18------------------------ */

$("#valor-t4-fila-1").mouseenter(() => {
    $("#valor-t4-fila-1").css({ "background-color": "red" }) //tambien mouseover() es valido
})
$("#valor-t4-fila-2").mouseenter(() => {
    $("#valor-t4-fila-2").css({ "background-color": "blue" })
})
$("#valor-t4-fila-1").mouseout(() => {
    $("#valor-t4-fila-1").css({ "background-color": "red" })
})
$("#valor-t4-fila-2").mouseout(() => {
    $("#valor-t4-fila-2").css({ "background-color": "blue" })
})

/* ---------------------------Ejercicio 19------------------------ */
$("#valor-t5-fila-1").mouseenter(() => {
    $("#valor-t5-fila-1").css({ "background-color": "red" }) //tambien mouseover() es valido
})
$("#valor-t5-fila-2").mouseenter(() => {
    $("#valor-t5-fila-2").css({ "background-color": "blue" })
})
$("#valor-t5-fila-1").mouseout(() => {
    $("#valor-t5-fila-1").css({ "background-color": "" })
})
$("#valor-t5-fila-2").mouseout(() => {
    $("#valor-t5-fila-2").css({ "background-color": "" })
})

/* ---------------------------Ejercicio 20------------------------ */
let bandera = true
$("#ajusteTamaño").dblclick(() => {
    if (bandera) {
        $("#ajusteTamaño").css({ "width": "250px", "height": "250px" })
        bandera=false
    } else {
        $("#ajusteTamaño").css({"width":"800px","height":"70px"})
        bandera=true
    }


})

/* ---------------------------Ejercicio 21------------------------ */
$("#pVisible").hide()
$("#pOculto").click(()=>{
    $("p").hide(1000)
    $("#pVisible").show(4000)

    
})

/* ---------------------------Ejercicio 22------------------------ */


$("#valores").change(()=>{
    console.log("22 Ejercicio Select")
    console.log($('select[id="valores"] option:selected').text())
})
   
/* ---------------------------Ejercicio 23------------------------ */
console.log("23 Ejercicio Select")

$("#pagina-22").click((event)=>{
    event.preventDefault()
    console.log($("#pagina-22").attr("href"))
})

/* ---------------------------Ejercicio 24------------------------ */
$("#submit").click((event)=>{
    event.preventDefault()
    $("#mensaje").text("El Formulario fue Enviado")
})