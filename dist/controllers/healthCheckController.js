class HealthCheckController {
    constructor() {
        this.healthChecker = (req, res) => {
            res.json({ Health: "OK" });
        };
    }
}
export default new HealthCheckController().healthChecker;
