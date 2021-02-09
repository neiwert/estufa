const router = require("express").Router()

router.use("/", (req, res) => {
  res.send("your home")
});

module.exports = app => {
  app.use("/home", router)
}