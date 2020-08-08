alert('First realization');

function makeCar(){
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * convertible.length);

    return {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        convertible: convertible[rand5]
    }
}

var randomCar = makeCar();

console.log(randomCar);

alert('Second realization')

randomCar = {
    make: null,
    model: null,
    year: null,
    color: null,
    convertible: null,
    create: function() {
        var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
        var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
        var years = [1955, 1957, 1948, 1954, 1961];
        var colors = ["red", "blue", "tan", "yellow", "white"];
        var convertible = [true, false];
        var rand1 = Math.floor(Math.random() * makes.length);
        var rand2 = Math.floor(Math.random() * models.length);
        var rand3 = Math.floor(Math.random() * years.length);
        var rand4 = Math.floor(Math.random() * colors.length);
        var rand5 = Math.floor(Math.random() * convertible.length);
        this.make = makes[rand1];
        this.model = models[rand2];
        this.year = years[rand3];
        this.color = colors[rand4];
        this.convertible = convertible[rand5];
    }
}

randomCar.create();
console.log(randomCar);