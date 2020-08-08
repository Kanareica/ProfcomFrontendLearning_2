window.onload = init;

var controller = {
    answ: 0,
    imgCnt: 6,
    clck: 0,
    difference: 0,
    lastBtnClck: null,
}

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }

    var btn = document.getElementById("btnClckCnt");
    btn.onclick = btnClick;
    btn.onkeypress = keyPress;
}

function keyPress(event) {
    if (event.keyCode === 13) {
        btnClick();
    } else if (event.keyCode) {
        alert(event.keyCode);
    }
}

function btnClick(event) {
    if (controller.lastBtnClck) {
        controller.difference = event.timeStamp - controller.lastBtnClck;
        alert("Время с момента последнего события (миллисекунд): " + controller.difference);
    } else {
        alert("Нажми еще, пожалуйста.");
    }
    controller.lastBtnClck = event.timeStamp;
    controller.clck++;
    if (event.type === "click") {
        alert(event.type + " done " + controller.clck + " times");
    }
}

function showAnswer(event) {
    var image = event.target;

    var name = image.id;
    name = "img/" + name + ".jpg";
    image.src = name;

    controller.answ++;
    if (controller.answ === controller.imgCnt) {
    }
}