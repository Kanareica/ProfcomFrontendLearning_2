var ages = prompt('Кто вы?');
switch (ages) {
    case 'Ребёнок':
        alert('Вам от 0 до 12 лет');
        break;
    case 'Подросток':
        alert('Вам от 13 до 17 лет');
        break;
    case 'Расцвет сил':
        alert('Вам от 18 до 30 лет');
        break;
    case 'Пора сажать сына и растить дерево':
        alert('Вам от 31 до 45 лет');
        break;
    case 'Пенсия':
        alert('Вам от 60 лет');
        break;
    default:
        alert('Я вас не понял');
}