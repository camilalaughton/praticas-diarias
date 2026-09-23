const form = document.querySelector('form');
const resultado = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const valorDigitado = document.getElementById('number').value; 
    const numero = Number(valorDigitado);

    resultado.textContent = verificarParOuImpar(numero);
});

function verificarParOuImpar(number) {
    if (number % 2 == 0) {
        return 'O número é Par!'; 
    } else {
        return 'O número é Ímpar!';
    }
   
}