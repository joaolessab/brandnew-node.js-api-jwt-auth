const controller = require("../controllers/auth.controller");

const authRoutes = (app) => {
    app.post("/register", controller.register);
    app.post("/login", controller.login);
}

module.exports = authRoutes;