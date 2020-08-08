//Игру специально писал на английский с самого начала, если необходимо сделаю перевод позднее

var view = {
    showMsg: function (val) {
        var el = document.getElementById("msgArea");
        el.innerHTML = val;
    },
    showHit: function (pos) {
        var el = document.getElementById(pos);
        el.setAttribute("class", "hit");
    },
    showMiss: function (pos) {
        var el = document.getElementById(pos);
        el.setAttribute("class", "miss");
    },
    checkHit: function (pos) {
        var el = document.getElementById(pos);
        if (el.hasAttribute("class")) {
            view.showMsg("ERROR! YOU`VE ALREADY HIT THIS CELL!");
            return true;
        }
        return false;
    },
    checkDown: function () {
        return model.shipDown === model.shipNum;
    },
    checkNearby: function (location) {
        //code for check position near downed ship
    }
}

var model = {
    fieldSize: 10,
    shipNum: 10,
    shipDown: 0,
    shipLen: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1],
    ships: [ship1 = {}, ship2 = {}, ship3 = {}, ship4 = {}, ship5 = {}, ship6 = {}, ship7 = {}, ship8 = {}, ship9 = {}, ship10 = {}
    ],
    hit: function (pos) {
        if (view.checkHit(pos)) {
            return;
        }
        controller.hits++;
        var flag = -1;
        for (var i = 0; i < this.shipNum; i++) {
            flag = this.ships[i].locate.indexOf(pos);
            if (flag >= 0) {
                this.shipHit(i, pos, flag);
                this.shipDowned(i);
                if (view.checkDown()) {
                    view.showMsg("YOU DOWNED ALL SHIPS!");
                    setTimeout(function () {
                        alert("CONGRATILATION! YOU DOWNED " + model.shipNum + "SHIPS FOR " + controller.hits + " HITS!");
                    }, 3000 );
                }
                return;
            }
        }
        this.shipMiss(pos);
    },
    shipMiss: function(pos) {
        view.showMiss(pos);
        view.showMsg("NOOOOOO!!!");
    },
    shipHit: function (num, pos, cell) {
        this.ships[num].hit[cell] = 1;
        view.showHit(pos);
        view.showMsg("YEAH!!!");
    },
    shipDowned: function (num) {
        var sum = 0;
        for (var i = 0; i < this.ships[num].size; i++) {
            sum += this.ships[num].hit[i];
        }
        if (sum === this.ships[num].size) {
            view.showMsg("YOU DOWNED THIS SHIP!");
            this.shipDown++;
            //view.checkNearby(this.ships[num].locate);
        }
    },
    generateShipsLocation: function () {
        var location;
        for (var i = 0; i < this.shipNum; i++) {
            do {
                location = this.generateShip(i)
            } while (this.collision(location, i));
            this.ships[i].locate = location;
            this.ships[i].hit = Array(this.shipLen[i]).fill(0);
            this.ships[i].size = this.shipLen[i];
        }
    },
    generateShip: function (num) {
        var orientation = Math.floor(Math.random() * 2);
        var col, row;

        if (orientation === 1) {
            row = Math.floor(Math.random() * this.fieldSize);
            col = Math.floor(Math.random() * (this.fieldSize - this.shipLen[num]));
        } else {
            col = Math.floor(Math.random() * this.fieldSize);
            row = Math.floor(Math.random() * (this.fieldSize - this.shipLen[num]));
        }

        let newLocation = [];

        for (var i = 0; i < this.shipLen[num]; i++) {
            if (orientation === 1) {
                newLocation.push(row + "" + (col + i));
            } else {
                newLocation.push((row + i) + "" + col);
            }
        }
        return newLocation;
    },
    collision: function (loc, num) {
        for (var i = 0; i < num; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < loc.length; j++) {
                if (ship.locate.indexOf(loc[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
}

var controller = {
    hits: 0,
    procHit: function (hit) {
        var pos = check(hit);
        if (pos) {
            model.hit(pos);
        }
        setTimeout(function () {
            view.showMsg("");
        }, 2000 );
    }
}

function check(pos) {
    if (pos === null) {
        view.showMsg("WHERE ARE COORDINATES?");
        return null;
    }
    if (pos.length < 2) {
        view.showMsg("WRONG COORDINATES");
        return null;
    }

    const setalone = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var row = setalone.indexOf(pos.charAt(0));
    var col = parseInt(pos.substring(1));

    col--;
    if (isNaN(row) || isNaN(col)) {
        view.showMsg("WRONG COORDINATES");
        return null;
    } else if (row < 0 || row >= model.fieldSize || col < 0 || col >= model.fieldSize) {
        view.showMsg("WRONG COORDINATES");
        return null;
    }
    return "" + row + col;
}

function init () {
    model.generateShipsLocation();
    var el = document.getElementById("sndBtn");
    el.onclick = handlerSndBtn;
    var keyClk = document.getElementById("hitIn");
    keyClk.onkeypress = handlerKeyPress;
}

function handlerSndBtn() {
    var el = document.getElementById("hitIn");
    var hit = el.value;
    controller.procHit(hit);
    el.value = "";
}

function handlerKeyPress(e){
    var el = document.getElementById("sndBtn");
    if(e.keyCode === 13){
        el.click();
    }
}

window.onload = init;