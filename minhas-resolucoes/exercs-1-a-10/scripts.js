
//alert("Olá mundo!");  // exercicio 2
// alert(2+2);  // exercicio 3

// exercicio 4:
/*
document.getElementById("name-btn").addEventListener("click", function () {
    const nomeCompleto = document.getElementById('nome-completo').value;
    alert(nomeCompleto);
});
*/
/////////////////////////////////////////////////////////////////////////////

// exercicio 5:
/*
document.getElementById("name-btn").addEventListener("click", function () {
    const tamanho = document.getElementById('nome-completo').value.length;
    alert(tamanho);
});
*/

// exercicio 6:
/*
const imgLampada = document.getElementById('img-lampada');
imgLampada.addEventListener("click", () => {
    if (imgLampada.src == "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true") {
        imgLampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
    } else
        imgLampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";
});
*/

// exercicio 7:

const imgLampada = document.getElementById('img-lampada');
imgLampada.addEventListener("mouseover", () => {
    if (imgLampada.src == "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true") {
        imgLampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
    } else
        imgLampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";
});

