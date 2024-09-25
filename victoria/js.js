function calcular() {  
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const operacao = document.getElementById('operacao').value;
let resultado;

switch (operacao) {
    case 'Soma':
        resultado = num1 + num2;
        break
    case 'Subtração':
        resultado = num1 - num2;
        break
    case 'Multiplicação':
        resultado = num1 * num2;
        break
    case 'Divisão':
        resultado = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero.';
        break;
}
document.getElementById('resultado').textContent = `O VALOR É...${resultado}`;
}
function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').textContent = '';
}