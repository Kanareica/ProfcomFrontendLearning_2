

const express = require("express");
const fs = require("fs");
const body = require("body-parser");
const cookie = require("cookie-parser");
const morgan = require("morgan");
const uuid = require("uuid-v4");
const app = express();


app.use(morgan("dev"));
app.use(express.static("public"));
app.use(body.json());
app.use(cookie());


const users = {};
const ids = {};

app.post("/auth", function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    if (!username || !email) {
        return res.status(400).end();
    }
    if (!users[email]) {
        users[email] = {
            username,
            email,
            count: 0,
        };
    }
    const id = uuid();
    ids[id] = email;
    
    res.cookie("info", id, {domain: "localhost", expires: new Date(Date.now() + 1000 * 60 * 10)});
    res.json({id});
})

app.get("/", function (req, res) {
    const html = fs.readFileSync("../public/index.html", "utf8");
    res.end(html);
});

app.get("/main.js", function (req, res) {
    const js = fs.readFileSync("../public/main.js", "utf8");
    res.end(js);
});

app.get("/main.css", function (req, res) {
    const css = fs.readFileSync("../public/main.css", "utf8");
    res.end(css);
});

app.get("/blocks/block/index.js", function (req, res) {
    const js = fs.readFileSync("../public/blocks/block/index.js", "utf8");
    res.end(js);
});

app.get("/blocks/form/index.js", function (req, res) {
    const js = fs.readFileSync("../public/blocks/form/index.js", "utf8");
    res.end(js);
});

app.get("/blocks/scoreboard/index.js", function (req, res) {
    const js = fs.readFileSync("../public/blocks/scoreboard/index.js", "utf8");
    res.end(js);
});

app.get("/services/user-service.js", function (req, res) {
    const js = fs.readFileSync("../public//services/user-service.js", "utf8");
    res.end(js);
});

app.get("/modules/http.js", function (req, res) {
    const js = fs.readFileSync("../public/modules/http.js", "utf8");
    res.end(js);
});

app.get("/me", function (req, res) {
    const id = req.cookies["info"];
    const email = ids[id];
    if (!email || !users[email]) {
        return res.status(401).end();
    }

    users[email].count += 1;

    res.json(users[email]);
});

app.get('/users', function (req, res) {
    const scorelist = Object.entries(users)
        .sort((l, r) => l.score - r.score)
        .map(user => {
           return {
                email: user.email,
               age: user.age,
               score: user.score,
           }
        });
    res.json(scorelist);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});
