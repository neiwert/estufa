
const { database } = require("../database/connection")
const Crud = require("../database/models/CRUD")
const { Unidades_producao } = database.models
const router = require("express").Router()

const unidades_producao = new Crud(Unidades_producao)

router.get("/", async (req, res) => unidades_producao.read(req, res))

router.post("/", async (req, res) => unidades_producao.create(req, res))

router.put("/", async (req, res) => unidades_producao.update(req, res))

router.delete("/", async (req, res) => unidades_producao.delete(req, res))


module.exports = app => {
  app.use("/unidades_producao",router)
}