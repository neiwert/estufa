
const { database } = require("../database/connection")
const Crud = require("../database/models/CRUD")
const { Unidades_armazenamento } = database.models
const router = require("express").Router()

const unidades_armazenamento = new Crud(Unidades_armazenamento)

router.get("/", async (req, res) => unidades_armazenamento.read(req, res))

router.post("/", async (req, res) => unidades_armazenamento.create(req, res))

router.put("/", async (req, res) => unidades_armazenamento.update(req, res))

router.delete("/", async (req, res) => unidades_armazenamento.delete(req, res))


module.exports = app => {
  app.use("/unidades_armazenamento", router)
}