const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);//method - метод запроса, url - адрес, с которого был запрос
    if (request.url === "/style.css") {
        const css = fs.readFileSync("style.css", "utf8");
        response.end(css);
    } else {
        const html = fs.readFileSync("index.html", "utf8");
        response.end(html);//завершить обработку js
    }
});

console.log("port = ", process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log("Server started!");