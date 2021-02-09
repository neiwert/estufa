const { database } = require("../database/connection")
const Crud = require("../database/models/CRUD")
const { Culturas, Variantes } = database.models
const router = require("express").Router()

const variantes = new Crud(Variantes)
const culturas = new Crud(Culturas)

router.get("/", async (req, res) => culturas.read(req, res))

router.post("/", async (req, res) => culturas.create(req, res))

router.put("/", async (req, res) => culturas.update(req, res))

router.delete("/", async (req, res) => culturas.delete(req, res))


router.get("/variantes", async (req, res) => variantes.read(req, res))

router.post("/variantes", async (req, res) => variantes.create(req, res))

router.put("/variantes", async (req, res) => variantes.update(req, res))

router.delete("/variantes", async (req, res) => variantes.delete(req, res))


module.exports = app => {
  app.use("/culturas", router)
}
