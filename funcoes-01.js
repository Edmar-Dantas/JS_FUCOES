function calcular() {
    let num1 = Number(prompt("Digite o primeiro número"));
    let num2 = Number(prompt("Digite o segundo número"));
    let soma = num1 + num2;

    document.getElementById("resul").innerHTML = soma;
}