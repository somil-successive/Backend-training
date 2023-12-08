"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor() {
        this.login = (req, res) => {
            res.json({ message: "Login succesfull" });
        };
    }
}
exports.default = LoginController;
