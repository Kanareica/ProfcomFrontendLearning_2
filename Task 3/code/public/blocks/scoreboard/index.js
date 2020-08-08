(function () {
    "use strict";

    const Block = window.Block;

    class Scoreboard extends Block {
        constructor() {
            const el = document.createElement("table");
            super(el);
        }

        clear() {
            this.el.innerHTML = "";
        }

        _insertHeader() {
            const tHead = document.createElement("thead");
            const tRow = document.createElement("tr");
            const thEmail = document.createElement("th");
            const thScore = document.createElement("th");
            thEmail.textContent = "E-Mails";
            thScore.textContent = "Scores";

            tRow.appendChild(thEmail);
            tRow.appendChild(thScore);
            tHead.appendChild(tRow);
            this.el.appendChild(tHead);
        }

        _insertScores(users = []) {
            const tBody = document.createElement("tbody");
            users.forEach(function (user) {
                const tRow = document.createElement("tr");
                const thEmail = document.createElement("th");
                const thScore = document.createElement("th");
                thEmail.textContent = user.email;
                thScore.textContent = user.score;

                if (user.me) {
                    tRow.classList.add("me");
                }

                tRow.appendChild(thEmail);
                tRow.appendChild(thScore);
                tBody.appendChild(tRow);
            });

            this.el.appendChild(tBody);
        }

        update(users = []) {
            this.clear();
            this._insertHeader();
            this._insertScores(users);
        }
    }

    window.Scoreboard = Scoreboard;
})();