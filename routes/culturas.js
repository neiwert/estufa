const router = require("express").Router();

router.get("/", async (req, res) => {

});

router.post("/", async (req, res) => {

});

router.put("/", async (req, res) => {

});

router.delete("/", async (req, res) => {

});

router.get("/variantes", (req, res) => {
});

router.post("/variantes", async (req, res) => {

});

router.put("/variantes", async (req, res) => {

});

router.delete("/variantes", async (req, res) => {

});


module.exports = app => {
    app.use("/culturas", router);
}
