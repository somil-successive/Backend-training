"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterController {
    constructor() {
        this.register = (req, res) => {
            res.json("Registered Successfully");
        };
    }
}
exports.default = new RegisterController().register;
