function Soma() {
    n = parseFloat(document.getElementById('num1').value)
    n2 = parseFloat(document.getElementById('num2').value)

    let Soma = n + n2
    alert("A soma dos números é: " + Soma)
}

function Subtracao() {
    n = parseFloat(document.getElementById('num1').value)
    n2 = parseFloat(document.getElementById('num2').value)

    let Subtracao = n - n2
    alert("A subtração dos números é: " + Subtracao)
}

function Multiplicacao() {
    n = parseFloat(document.getElementById('num1').value)
    n2 = parseFloat(document.getElementById('num2').value)

    let Multiplicacao = n * n2
    alert("A multiplicação dos números é: " + Multiplicacao)
}

function Divisao() {
    n = parseFloat(document.getElementById('num1').value)
    n2 = parseFloat(document.getElementById('num2').value)

    let Divisao = n / n2
    alert("A divisão dos números é: " + Divisao)
}