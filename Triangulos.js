/*Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e
 retorne sua classificação quanto ao tamanho de seus lados.*/

const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const verificar = document.querySelector("#Verificar");
const btn = document.querySelector("#tipoDeTriangulo")
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");

//mostrar ao usuário que o campo não foi preenchido
lado1.onblur = () => {
    if (lado1.value == " ") {
        l1.style = "color: #aa0044";
        lado1.style = "border-color : #aa0044";


    } else {
        l1.style = "color: #000000";
        lado1.style = "border-color : #000000";
    }
}

lado2.onblur = () => {
    if (lado2.value == " ") {
        l2.style = "color: #aa0044";
        lado2.style = "border-color : #aa0044";


    } else {
        l2.style = "color: #000000";
        lado2.style = "border-color : #000000";
    }
}

lado3.onblur = () => {
    if (lado3.value == " ") {
        l3.style = "color: #aa0044";
        lado3.style = "border-color : #aa0044";


    } else {
        l3.style = "color: #000000";
        lado3.style = "border-color : #000000";
    }
}

btn.onclick = () => {
    if (lado1.value == " ") {
        lado1.focus();
    } else if (lado2.value == " ") {
        lado2.focus();

    } else {
        if (lado3.value == " ") {
            lado3.focus();

        } else {
            verificar.value = tipoDeTriangulo(lado1.value, lado2.value, lado3.value);

        }
    }
    const tipoDeTriangulo = (lado1, lado2, lado3) => {
        lado1 = Number.parseInt(lado1);
        lado2 = Number.parseInt(lado2);
        lado3 = Number.parseInt(lado3);


        if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
            lado2
            if (lado1 == lado2 && lado2 == lado3) {
                return ('Triângulo Equilátero');
            } else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {
                return ('Triângulo Isóceles');
            } else {
                return ('Triângulo Escaleno');
            }
        }
    }
}