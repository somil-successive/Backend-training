import App from "./app.js";
import { configurations } from "./utils/config.js";

const app = new App();
app.startServer(configurations.port);
