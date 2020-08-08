var el = document.getElementsByTagName("p");
el.summary = "";
for (var i = 0; i < el.length; i++) {
    el.summary += " " + el[i].innerHTML;
    el[i].setAttribute("class", "randomClass" + Math.trunc(Math.random() * 12));
}

el[el.length - 1].innerHTML = el.summary;