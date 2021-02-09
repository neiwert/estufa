const { database } = require("../database/connection")
const Crud = require("../database/models/CRUD")
const { Safras } = database.models
const router = require("express").Router()

const safras = new Crud(Safras)

router.get("/", async (req, res) => safras.read(req, res))

router.post("/", async (req, res) => safras.create(req, res))

router.put("/", async (req, res) => safras.update(req, res))

router.delete("/", async (req, res) => safras.delete(req, res))


module.exports = app => {
  app.use("/safras", router)
}