(function () {
    "use strict";

    const Block = window.Block;
    const Form = window.Form;
    const Scoreboard = window.Scoreboard;
    const UserService = window.UserService;
    const userService = new UserService();

    const app = new Block(document.getElementById("application"));
    const nav = {
        auth: new Block(document.getElementById("auth")),
        singup: new Block(document.getElementById("singup")),
        scores: new Block(document.getElementById("scores")),
    }

    const sections = {
        auth: Block.Create("section", ["auth-section"]),
        singup: Block.Create("section", ["auth-section"]),
        scores: Block.Create("section", ["auth-section"]),
        hide() {
            this.auth.hide();
            this.singup.hide();
            this.scores.hide();
        }
    }
    sections.hide();

    app
        .append(sections.auth)
        .append(sections.singup)
        .append(sections.scores);

    let header;

    const singupForm = new Form([
        {
            classes: [],
            attrs: {
                type: "text",
                placeholder: "Your name",
                required: "required",
                name: "username",
            }
        },
        {
            classes: [],
            attrs: {
                type: "email",
                placeholder: "Your email",
                required: "required",
                name: "email",
            }
        },
        {
            classes: [],
            attrs: {
                type: "text",
                placeholder: "Your age",
                required: "required",
                name: "age",
            }
        },
        {
            classes: [],
            attrs: {
                type: "submit",
                value: "SignUp"
            }
        },
    ]);
    header = Block.Create("h2");
    header.setText("Sing Up");
    sections.singup.append(header).append(singupForm);

    const authForm = new Form([
        {
            classes: [],
            attrs: {
                type: "email",
                placeholder: "Your email",
                required: "required",
                name: "email",
            }
        },
        {
            classes: [],
            attrs: {
                type: "password",
                placeholder: "Your password",
                required: "required",
                name: "password",
            }
        },
        {
            classes: [],
            attrs: {
                type: "submit",
                value: "Log In"
            }
        },
    ]);
    header = Block.Create("h2");
    header.setText("Log In");
    sections.singup.append(header).append(authForm);

    const scores = new Scoreboard();
    header = Block.Create("h2");
    header.setText("Leaders");
    sections.singup.append(header).append(scores);

    nav.scores.on("click", function () {
        sections.hide();
        userService.loadUsersList(function (err, users) {
            if (err) {
                return alert(`Error ${err.statusCode}`);
            }
            scores.update(users);
            sections.scores.show();
        });
    });

    nav.singup.on("click", function () {
        sections.hide();
        if (userService.isLoggedIn()) {
            return alert("You had signed up");
        }
        sections.singup.show();
    });

    nav.auth.on("click", function () {
        sections.hide();
        if (userService.isLoggedIn()) {
            return alert("You had logged in");
        }
        sections.auth.show();
    });

    singupForm.onSubmit(function (formdata) {
        const user = {
            email: formdata.email,
            password: formdata.password,
            age: +formdata.age,
        }
    });

    authForm.onSubmit(function (formdata) {
        const user = {
            email: formdata.email,
            password: formdata.password,
        };
        console.log("auth", user);
    });
})();