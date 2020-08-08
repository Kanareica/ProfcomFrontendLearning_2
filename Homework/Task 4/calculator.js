alert('А теперь калькулятор')

var x = prompt("Введите первое число",100);  // введите первое число
var y = prompt("Введите второе число",100);  // введите второе
var z = prompt("Введите 1,чтобы сработал знак + 2,чтобы - 3,чтобы *, 4 чтобы /");

x = parseInt(x);
y = parseInt(y);

var result;

if (z === '1') {
    result = x + y;
} else if (z === '2') {
    result = x - y;
} else if (z === '3') {
    result = x * y;
} else if (z === '4') {
    result = x / y;
} else {
    result = 'Вы ввели не существующую команду!';
}
alert(result);