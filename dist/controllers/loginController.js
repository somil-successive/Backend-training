class LoginController {
    constructor() {
        this.login = (req, res) => {
            res.json("User Authorised");
        };
    }
}
export default new LoginController().login;
