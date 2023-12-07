"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor() {
        this.login = (req, res) => {
            res.json("User Authorised");
        };
    }
}
exports.default = new LoginController().login;
