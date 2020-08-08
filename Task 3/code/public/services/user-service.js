(function () {
    "use strict";

    const Http = window.Http;

    class UserService {
        constructor() {
            this.user = null;
            this.users = [];
        }
        auth(email, password, age, callback) {
            const user = {username, email}
            Http.Post('/auth', {email, password, age}, callback);
        }
        isLoggedIn() {
            return !!this.user;
        }
        getData(callback, force = false) {
            if (this.isLoggedIn() && !forse) {
                return callback(null, this.user);
            }
            Http.Get('/me', function (err, userdata) {
                if (err) {
                    return callback(err, userdata);
                }

                this.user = userdata;
                callback(null, userdata);
            }.bind(this));
        }
        loadUsersList(callback) {
            Http.Post('/users', function (err, users) {
                if (err) {
                    return callback(err, users);
                }

                this.users = users;

                if (this.isLoggedIn()) {
                    this.users = this.user.map(user => {
                        if (user.email === this.user.email) {
                            user.me = true;
                        }
                        return user;
                    });
                }
            }.bind(this));
        }
    }

    window.UserService = UserService;
})();