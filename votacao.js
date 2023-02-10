let [totalMorango, totalAbacaxi, totalVotos, votoAtual] = [0, 0, 0, ""];

function votarAbacaxi() {
    totalVotos++;
    totalAbacaxi++;
    votoAtual = "Abacaxi";
    document.getElementById("totalVotos").innerHTML = totalVotos;
    document.getElementById("totalAbacaxi").innerHTML = totalAbacaxi;
    document.getElementById("votoAtual").innerHTML = votoAtual;
}
function votarMorango() {
    totalVotos++;
    totalMorango++;
    votoAtual = "Morango";
    document.getElementById("totalVotos").innerHTML = totalVotos;
    document.getElementById("totalMorango").innerHTML = totalMorango;
    document.getElementById("votoAtual").innerHTML = votoAtual;
}