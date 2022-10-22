const userRoutes = (app, auth) => {
    // Welcome request to test JWT
    app.get("/welcome", auth, (req, res) => {
        res.status(200).send("Welcome 🙌");
    });
}

module.exports = userRoutes;