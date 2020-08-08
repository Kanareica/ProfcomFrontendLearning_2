var el = {
    summary: ""
};
var elmts = document.getElementsByTagName("p");
var len = elmts.length;

for (var i = 1; i <= len; i++) {
    el.text = document.getElementById("par" + i);
    el.summary += " " + el.text.innerHTML;
}

alert("work of js");
el.text.innerHTML = el.summary;