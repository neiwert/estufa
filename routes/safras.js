const router = require("express").Router()


router.get("/", async (req, res) => {

});

router.post("/", async (req, res) => {

});

router.put("/", async (req, res) => {

});

router.delete("/", async (req, res) => {

});


module.exports = app => {
  app.use("/safras", router)
}