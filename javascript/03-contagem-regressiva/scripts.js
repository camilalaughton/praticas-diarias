const form = document.querySelector('form'); 
const resultado = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const valorDigitado = document.getElementById('num').value;
    const numero = Number(valorDigitado); 

    resultado.textContent = contagemRegressiva(numero);
});

function contagemRegressiva(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
     return 'Contagem finalizada! Veja o console.';
}