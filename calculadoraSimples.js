function calcular() {
    let opcao = prompt("Digite a operação [/ x + -]")
    let num1 = Number(prompt("Digite o primeiro número"));
    let num2 = Number(prompt("Digite o segundo número"));
    let resul = 0;

    switch (opcao) {
        case "/":
            resul = num1 / num2;
            break;
        case "+":
            resul = num1 + num2;
            break;
        case "-":
            resul = num1 - num2;
            break;
        case "x":
            resul = num1 * num2;
            break;

        default:
            break;
    }
    document.getElementById("resul").innerHTML = resul;
}