const authJwt = require("../middlewares/authJwt");
const controller = require("../controllers/user.controller");

const userRoutes = (app) => {
    // Welcome request to test JWT
    app.get("/welcome", authJwt, controller.welcome);
}

module.exports = userRoutes;