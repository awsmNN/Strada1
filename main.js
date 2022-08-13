//Калькулятор элементарный

function calcElementary (a,b,operator) {
    switch (operator) {
        case 'plus':
        alert (a+b+operator);
        break;
        case 'minus':
        alert ((a-b)+operator);
        break;
        case 'multi':
        alert ((a*b)+operator);
        break;} 
}


let a = Number(prompt('Введите число "а"', ''));
let b = Number(prompt('Введите число "b"', ''));
let operator = (prompt('Введите действие', ''));


let result = calcElementary (a,b,operator);
alert (result);
