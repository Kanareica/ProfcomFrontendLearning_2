function check (name, age) {
    age = 12 - age;
    var ending = '';
    switch (age) {
        case 1: ending = 'год';
            break;
        case 2:
        case 3:
        case 4: ending = 'годa';
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11: ending = 'лет';
            break;
        default:
            alert('ERROR');
            return 'ERROR';
    }
    return name + ', осталось учиться ' + age + ending;
}

var answ = check(prompt('NAME'), prompt('CLASS?', 10))
alert(answ);
while (answ === 'ERROR') {
    alert(answ);
}