function tabuada(numero) {
    numero = document.getElementById("numero").value
    document.getElementById("titulo").innerHTML = `Tabuada do ${numero}`
    document.getElementById("p").innerHTML = ""
    for (let indice = 1; indice <= 10; indice++) {

        document.getElementById("p").innerHTML += `${numero} x ${indice} = ${numero * indice}` + "<br>";
        
    }
}

function limpar() {
    document.getElementById("p").innerHTML = ""
}



