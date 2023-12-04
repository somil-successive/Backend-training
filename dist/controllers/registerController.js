class RegisterController {
    constructor() {
        this.register = (req, res) => {
            res.json("Registered Successfully");
        };
    }
}
export default new RegisterController().register;
