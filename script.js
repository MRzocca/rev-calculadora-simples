function calculate(operator) {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                result = 'Erro: divisão por zero';
            } else {
                result = firstNumber / secondNumber;
            }
            break;
        default:
            result = 'Operador inválido';
            break;
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}
