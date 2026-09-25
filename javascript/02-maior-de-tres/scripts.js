const form = document.querySelector('form');
const resultado = document.getElementById('result');

form.addEventListener('submit', function (event)  {
    event.preventDefault();

    const valorDigitado01 = document.getElementById('num01').value;
    const valorDigitado02 = document.getElementById('num02').value;
    const valorDigitado03 = document.getElementById('num03').value;

    const numero01 = Number(valorDigitado01); 
    const numero02 = Number(valorDigitado02);
    const numero03 = Number(valorDigitado03);

    resultado.textContent = maiorDeTres(numero01,numero02,numero03);

}); 

function maiorDeTres(num01, num02, num03) {
    if (num01 === num02 && num02 === num03) {
        return `Empate, os números são iguais!`;
    } else if (num01 >= num02 && num01 >= num03) {
       return `O número ${num01} é maior ou igual a ${num02} e ${num03}`;
    } else if (num02 >= num01 && num02 >= num03) {
        return `O número ${num02} é maior ou igual a ${num01} e ${num03}`;
    } else {
        return `O número ${num03} é maior ou igual a ${num01} e ${num02}`;
    }
}