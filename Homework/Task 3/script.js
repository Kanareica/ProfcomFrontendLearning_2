var ages = prompt('Сколько вам лет?');
if (ages <= 12 && ages >= 0) {
    alert('Ребёнок');
} else if (ages >= 13 && ages <= 17) {
    alert('Подросток');
} else if (ages >= 18 && ages <= 30) {
    alert('Расцвет сил');
} else if (ages >= 31 && ages <= 45) {
    alert('Пора сажать сына и растить дерево');
} else if (ages >= 60) {
    alert('Пенсия');
} else if (typeof ages == 'number') {
    alert('Вы не в списках, но возраст ' + ages + ' неплох');
} else {
    alert('Вы не в списках');
}